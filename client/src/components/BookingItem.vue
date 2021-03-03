<template>
  <div class="booking-item">
      <h3>{{ booking.name }}</h3>
      <p><b>Guest Email Address: </b>{{ booking.email }}</p>
      <p><b>Booking Status: </b>
      <span v-if="(booking.checkedIn)" :booking="booking" >Checked in</span>
      <span v-if="(!booking.checkedIn)" :booking="booking" >Not checked in</span>
      </p>
      <button type="button" class="toggle-button" v-on:click="toggleCheckedIn">Check in/out</button>
      <br>
      <br>
      <button type="button" class="delete-button" v-on:click="deleteBooking">Remove booking</button>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'
import BookingsService from '@/services/BookingsService.js'

export default {
    name: 'booking-item',
    props: ['booking'],
    methods: {
        deleteBooking() {
            BookingsService.deleteBooking(this.booking._id)
            .then(() => eventBus.$emit('booking-deleted', this.booking._id))
        },
        toggleCheckedIn() {
            BookingsService.toggleCheckedIn(this.booking._id)
            .then(() => eventBus.$emit('toggle-check-in', this.booking._id))
        }
    }
}
</script>

<style>


</style>