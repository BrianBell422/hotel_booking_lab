<template lang="html">
  <div class="booking-wrapper">
      <booking-item/>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'
import BookingsService from '@/services/BookingsService.js'
import BookingItem from './BookingItem'

export default {
    name: 'bookings-grid',
    data(){
        return {
            bookings: []
        };
    },
    mounted(){

    },
    components: {
        
    }
}
</script>

<style>

</style>