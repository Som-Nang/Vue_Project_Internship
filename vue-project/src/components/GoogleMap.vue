<template>
    <div class="relative flex flex-col justify-center items-center h-[300px]">
            <!-- <iframe src="https://www.google.com/maps/d/embed?mid=1sdWiQ4Y-nCrmHvjoIcfE0Szd9EEIP_I&ehbc=2E312F" width="100%" height="100%" class="ctfGoogleMap">
                
            </iframe> -->
            <GoogleMap
                api-key="AIzaSyBr5ur-nQnHaXRvZBiZSDvUPBnAAL69F7s"
                style="width: 100%; height: 500px"
                :center="center"
                :zoom="15"
                >
                <MarkerCluster>
                    <Marker v-for="(location, i) in locations" :options="{ position: location } " :key="i" />
                    <InfoWindow :options="{ position: center, content: 'The Mekong Dragon Boutique Hotel' }" />
                    <Marker :options="{ position: center }" />
                </MarkerCluster>
                </GoogleMap>

            <div class="absolute z-50 flex flex-col justify-center items-center space-y-1">
                <LocationFilled class="w-8 " color="#ffff"/>
                <h2 class="text-white text-2sm shadow-2xl">No.134, Street.51, Beoung Keng Kang I, Chamkar Mon, Phnom Penh, Cambodia</h2>
                <a href=""></a><a class="text-yellow-500 text-2sm shadow-md"  aria-label="View larger map" target="_blank" jstcache="20" href="https://goo.gl/maps/qvKmYCdAoTLt8Rij6" jsaction="mouseup:placeCard.largerMap">
                    Click to view more details
                </a>
            </div>
            
        </div>
        
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import { GoogleMap, Marker, MarkerCluster,InfoWindow } from 'vue3-google-map';
 
  
  export default defineComponent({
    components: { GoogleMap, Marker, MarkerCluster,InfoWindow },
    setup() {
      const center = { lat: 11.554247, lng:  104.926572};
     
      const locations = [
        { lat: 11.555605, lng: 104.927323},
        { lat: 11.556172, lng: 104.928497},
        { lat: 11.575635, lng:104.922903},
        { lat: 11.560569, lng:104.932197},
        { lat: 11.563843, lng:104.930968},
        { lat: 11.547747,  lng:104.933216},
        
      ]
  
      return { center, locations }
    },
  })
  </script>
  