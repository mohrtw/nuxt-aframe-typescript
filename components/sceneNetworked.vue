<template>
    <a-scene :networked-scene="'serverURL: https://nxr.lifescope.io; app: lifescope-xr; room: myxrroom; audio: true; adapter: webrtc;'">
        <a-sphere
            color="blue"
            position="0 0 -10">
        </a-sphere>
        
        <a-sphere
            color="red"
            position="0 0 10">
        </a-sphere>

        <a-entity id="player">
        </a-entity>
    </a-scene>
</template>

<script lang="ts">
// @ts-nocheck

export default {

    mounted() {
        var scene = document.querySelector('a-scene');  
        if (scene.hasLoaded) {
            this.onSceneLoaded()
        }
        else {
            scene.addEventListener('loaded', self.onSceneLoaded);
        }
    },

    methods: {
        onSceneLoaded() {
            this.createAvatarTemplate();
            this.addAvatarTemplate();
            this.networkAvatarRig();
        },

        createAvatarTemplate() {
            if (CONFIG.DEBUG) {console.log('createAvatarGLTFTemplate()');}
            var frag = this.fragmentFromString(`
            <template id="avatar-rig-template" v-pre>
                <a-entity>
                    <a-entity class="camera-rig"
                        position="0 0 0">
                        <a-entity
                            class="player-camera camera">
                            <a-sphere color="blue">
                            </a-sphere>
                        </a-entity>
                    </a-entity>
                </a-entity>
            </template> 
            `);
            var assets = document.querySelector('a-assets');
            try {
                assets.appendChild(frag);
            }
            catch (err) {
                console.log('createAvatarGLTFTemplate error');
                console.log(err);
            }
            
        },

        addAvatarTemplate() {
            if (CONFIG.DEBUG) {console.log("addAvatarTemplate");};

            try {
                NAF.schemas.add({
                    template: '#avatar-rig-template',
                    components: [
                    {
                        component: 'position'
                    },
                    {
                        component: 'rotation'
                    },
                    {
                        selector: '.camera-rig',
                        component: 'rotation'
                    },
                    {
                        selector: '.camera-rig',
                        component: 'position'
                    },
                    {
                        selector: '.player-camera',
                        component: 'rotation'
                    },
                    {
                        selector: '.player-camera',
                        component: 'position'
                    },
                    ]
                });
            }
            catch (err) {
                console.log('addAvatarRigTemplate error');
                console.log(err);
            }
        },

        networkAvatarRig() {
            if (CONFIG.DEBUG) {console.log('networkAvatarRig');}
            var player = document.getElementById('player');
            try {
                if (player) {
                    player.setAttribute("networked",
                        { 'template': '#avatar-rig-template',
                        'attachTemplateToLocal': false });
                }
                else {
                    console.log("failed to set up NAF on player");
                }
            }
            catch (e) {
                console.log("failed to set up NAF on player");
                console.log(e);
            }
            finally {
                // console.log('networkAvatarRig finally');
            }
        },

        fragmentFromString(strHTML) {
            return document.createRange().createContextualFragment(strHTML);
        },

    }
    
}
</script>