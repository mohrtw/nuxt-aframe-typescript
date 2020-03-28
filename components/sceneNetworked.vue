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
            document.querySelector('a-scene').addEventListener('loaded', self.onSceneLoaded) 
    },

    methods: {
        onSceneLoaded() {
            this.createAvatarTemplate();
            this.addAvatarTemplate();
            this.networkAvatarRig();
        },

        createAvatarTemplate() {
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
                assets.appendChild(frag);
        },

        addAvatarTemplate() {
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
                    }]
                });
        },

        networkAvatarRig() {
            var player = document.getElementById('player');
                if (!player) console.log("failed to set up NAF on player");
                
                 player.setAttribute("networked",
                    { 'template': '#avatar-rig-template',
                    'attachTemplateToLocal': false });
    
        },

        fragmentFromString(strHTML) {
            return document.createRange().createContextualFragment(strHTML);
        },

    }
    
}
</script>