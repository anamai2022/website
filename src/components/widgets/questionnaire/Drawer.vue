<template>
  <div>
    <Drawer
      @close="rightDrawerDescription"
      :align="'right'"
      :closeable="true"
      :maskClosable="true"
      :zIndex="1002"
    >
      <div v-if="openRightDrawer">
        <div class="offcanvas-header newspaper">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
            {{ DrawerTitle }}
          </h5>
        </div>
        <div class="offcanvas-body ">
          <div class="newspaper">
            {{ titleDrawer }}=> {{ DrawerCode }}
            {{ DrawerRemark }}
          </div>
        </div>
      </div>
    </Drawer>
  </div>
</template>
