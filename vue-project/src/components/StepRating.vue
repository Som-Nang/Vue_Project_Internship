<template>
<div>
      <Wizard
        navigable-tabs
        scrollable-tabs
        :custom-tabs="[
          {
            title: 'Step 1',
          },
          {
            title: 'Step 2',
          },
          {
            title: 'Step 3',
          },
          {
            title: 'Step 4',
          },
          {
            title: 'Step 5',
          },
          {
            title: 'Step 6',
          },
          {
            title: 'Step 7',
          },
          {
            title: 'Step 8',
          },
          {
            title: 'Step 9',
          },
          {
            title: 'Step 10',
          },
        ]"
        :beforeChange="onTabBeforeChange"
        @change="onChangeCurrentTab"
        @complete:wizard="wizardCompleted"
      >
        
      </Wizard>
    </div>

    
</template>

<script>
import 'form-wizard-vue3/dist/form-wizard-vue3.css'
import Wizard from 'form-wizard-vue3'


export default {
  name: 'App',
  components: {
    Wizard,
  },
  data() {
    return {
      currentTabIndex: 0,
    };
  },

  
};
</script>
<style>
.form-wizard-vue .fw-footer{
    display: none;
    border: 1px solid red;
}
 .form-wizard-vue .fw-body-content {
    display: none;
    border: 1px solid red;
}
.form-wizard-vue .fw-body-list .fw-list-progress {
  height: 4px;
    width: 130%;
    top: 0%;
    left: 30%;
}
.form-wizard-vue .fw-body-list .fw-list-progress-active {
    background: rgb(30 64 175);
}
.form-wizard-vue .fw-step-checked {
    border: 2px solid rgb(30 64 175);
    background: rgb(255, 255, 255)!important;
    color: white;
}
.form-wizard-vue .fw-step-active {
    background: rgb(30 64 175)!important;
}.form-wizard-vue .fw-body-list li .fw-list-wrapper-icon {
    color: black;
    border-radius: 9px;
    /* border-start-end-radius: 9px;

    border-end-end-radius: 9px;
    border-end-start-radius: 9px; */
    /* border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%; */
    width: 80px;
}
.fw-overflow-scroll .fw-body-list:hover {
    overflow-x: hidden;
  
}
.form-wizard-vue .fw-body-list li{
    padding: 20px 10px;
}
.fw-step-title{
display: none;
}
/* .fw-step-container > i{
    padding: 0 28px;
    border: 2px solid red;
} */
</style>