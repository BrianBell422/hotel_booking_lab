<template>
  <div id="app">
    <h1>Motel Simon</h1>
    <h2>"Where dreams come to die"</h2>
    <h3>Simon says: "Don't be a twat"</h3>
    <booking-form />
    <bookings-grid />
  </div>
</template>

<script>
import BookingsGrid from '@/components/BookingsGrid';
import BookingForm from '@/components/BookingForm';

export default {
  name: 'App',
  components: {
    'booking-form': BookingForm,
    'bookings-grid': BookingsGrid,
  },


}
</script>

<style>

* {
  box-sizing: border-box;
}
body {
  margin: 0;
  height: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  background-color: bisque;
}

#app > h1 {
  padding-top: 30px;
}
</style>
