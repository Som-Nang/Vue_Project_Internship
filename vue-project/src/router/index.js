import { createRouter, createWebHashHistory } from "vue-router";
import Hotel from "../pages/Hotel.vue";
import BookingDetailPage from "../pages/BookingDetailPage.vue";
import BookingDetailPageNoneComment from '../pages/BookingDetailPageNoneComment.vue';
import Searchable from "../pages/Searchable.vue";
import Profile from "../pages/Profile.vue";
import RoomType from "../pages/subPage/RoomType.vue";
import Detail from "../pages/subPage/Detail.vue";
import Review from "../pages/subPage/Review.vue";
import Surrounding from "../pages/subPage/Surrounding.vue";
import HotelViewByItem from '../pages/subPage/HotelViewByItem.vue';
import HotelViewByMap from '../pages/subPage/HotelViewByMap.vue'

import Dashboard from "../pages/subPage/Dashboard.vue";
import Mybook from "../pages/subPage/Mybook.vue";
import MyPreview from "../pages/subPage/MyPreview.vue";
import MybookingDetail from "../pages/subPage/MybookingDetail.vue";
import MyWatchList from "../pages/subPage/MyWatchlist.vue";
import Report from "../pages/subPage/Report.vue";
import Setting from "../pages/subPage/Setting.vue";
import ScheduleHoliday from "../pages/subPage/ScheduleHoliday.vue";
import SettingAccount from "../pages/subPage/SettingAccount.vue";
import SettingBookingInformation from "../pages/subPage/SettingBookingInformation.vue";
import SettingPayment from "../pages/subPage/SettingPayment.vue";
import SettingNotification from "../pages/subPage/SettingNotification.vue";
import SettingTravel from "../pages/subPage/settingTravel.vue";

import BookingPreview from "../pages/subPage/BookingPreview.vue";
import HotelConfirmBooking from '../pages/subPage/HotelConfirmBooking.vue';
import HotelConfirmBookingExistedUser from '../pages/subPage/HotelConfirmBookingExistedUser.vue';
import HotelBookingSuccess from '../pages/subPage/HotelBookingSuccess.vue';
const routes = [
  { path: "/", name: Searchable, component: Searchable },
  {
    path: "/hotel",
    name: Hotel,
    component: Hotel,
    children: [
      {
        path: "/hotel/", name: HotelViewByItem, component: HotelViewByItem, children:
          [
            { path: "/hotel/hotelViewByItem/", name: RoomType, component: RoomType },
            { path: "/hotel/hotelViewByItem/detail", name: Detail, component: Detail },
            { path: "/hotel/hotelViewByItem/review", name: Review, component: Review },
            { path: "/hotel/hotelViewByItem/surrounding", name: Surrounding, component: Surrounding },
          ]
      },
      { path: "/hotel/hotelViewByMap", name: HotelViewByMap, component: HotelViewByMap },
    ],
  },
  {
    path: "/profile",
    name: Profile,
    component: Profile,
    children: [
      { path: "/profile/", name: Dashboard, component: Dashboard },
      { path: "/profile/mybook", name: Mybook, component: Mybook },
      { path: "/profile/mypreview", name: MyPreview, component: MyPreview },
      {
        path: "/profile/mywatchlist",
        name: MyWatchList,
        component: MyWatchList,
      },
      {
        path: "/profile/sheduleHoliday",
        name: ScheduleHoliday,
        component: ScheduleHoliday,
      },

      {
        path: "/profile/setting",
        name: Setting,
        component: Setting,
        children: [
          {
            path: "/profile/setting/",
            name: SettingAccount,
            component: SettingAccount,
          },
          {
            path: "/profile/setting/bookingInformation",
            name: SettingBookingInformation,
            component: SettingBookingInformation,
          },
          {
            path: "/profile/setting/payment",
            name: SettingPayment,
            component: SettingPayment,
          },
          {
            path: "/profile/setting/payment",
            name: SettingPayment,
            component: SettingPayment,
          },
          {
            path: "/profile/setting/notification",
            name: SettingNotification,
            component: SettingNotification,
          },
          {
            path: "/profile/setting/travel",
            name: SettingTravel,
            component: SettingTravel,
          },
        ],
      },
      { path: "/profile/report", name: Report, component: Report },

      {
        path: "/profile/bookingpreview",
        name: BookingPreview,
        component: BookingPreview,
      }, //Help Tap
    ],
  },
  {
    path: "/mybook/mybookingdetail/:id",
    name: "MybookingDetail",
    component: MybookingDetail,
  },

  {
    path: "/hotel/hotelViewByItem/bookingDetailPage/:id",
    name: "BookingDetailPage",
    component: BookingDetailPage,
  },

  // Booking detail page no comment display
  {
    path: "/hotel/hotelViewByItem/bookingDetailPageNoneComment/", name: "BookingDetailPageNoneComment", component: BookingDetailPageNoneComment,
  },
  // bookingDetailPageNoneComment

  //New User for booking
  {
    path: '/hotelConfirmBooking', name: HotelConfirmBooking, component: HotelConfirmBooking,
  },
  //New User for booking

  //New Existed User for booking
  {
    path: '/hotelConfirmBookingExistedUser', name: HotelConfirmBookingExistedUser, component: HotelConfirmBookingExistedUser
  },
  //New Existed User for booking

  //New  booking success page
  { path: '/hotelBookingSuccess', name: HotelBookingSuccess, component: HotelBookingSuccess },
  //New  booking success page
];

const router = createRouter({
  history: createWebHashHistory(),

  routes,
  linkActiveClass: "activeRounter",
});
export default router;
