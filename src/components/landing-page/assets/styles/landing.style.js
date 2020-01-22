import styled from 'styled-components';

const LandingWrapper = styled.div`
h1 {
  text-align: center;
}
direction: ltr;
     .my-drawer {
  position: relative;
  overflow: auto;
}
.my-drawer .am-drawer-sidebar {
  background-color: #fff;
  overflow: auto;
}
.my-drawer .am-drawer-sidebar .am-list {
  height: 300px;
  padding: 0;
}
.am-tabs {
  height: calc(100% - 110px);
.am-tabs-default-bar-tab {
  background-color: #cb1b00;
  color: white;
  height: 75px;
}
.ant-tabs-tab{
  border-color: transparent!important;
  border-bottom: none!important;
}
.am-tabs-default-bar-tab-active {
  background-color: #353437;
  color: white;
}
}
.child-tabs {
  height: 100%;
  width: 100%;
.am-tabs {
  height: 100%;
  }
.am-tabs-default-bar-tab {
  background-color: #353437;
  color: #9d9c9d;
  height: 75px;
}
.am-tabs-default-bar-tab-active {
  color: white;
}
}
.am-navbar {
    background-color: #25252e;
    border-radius: 25px 25px 0 0;
}
.am-drawer-sidebar {
  background-color: transparent!important;
}
.am-drawer-content {
  background-color: white!important;
}
.am-grid.am-grid-square .am-grid-item .am-grid-item-inner-content .am-grid-icon {
    margin-top: 9px;
    width: auto!important;
}
.grids-item {
 img {
 text-align: center;
  height: 60px;
  width: auto;
 }
 .image-wrapper {
  height: 70px;
  border: 0.5px solid black;
  border-radius: 10px;
  margin: 0 10px;
 }
div {
  font-size: 10px !important;
}
}
  `;

export default LandingWrapper;
