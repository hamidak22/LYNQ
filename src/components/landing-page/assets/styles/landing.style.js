import styled from 'styled-components';
import WithDirection, { direction } from 'containers/layouts/withDirection';

const LandingWrapper = styled.div`
     .ant-col-1, .ant-col-2, .ant-col-3, .ant-col-4,
     .ant-col-5, .ant-col-6, .ant-col-7, .ant-col-8,
     .ant-col-9, .ant-col-10, .ant-col-11, .ant-col-12,
     .ant-col-13, .ant-col-14, .ant-col-15, .ant-col-16,
     .ant-col-17, .ant-col-18, .ant-col-19, .ant-col-20,
     .ant-col-21, .ant-col-22, .ant-col-23, .ant-col-24
     .ant-col-xs-10, .ant-col-xs-14, .ant-col-xs-11, .ant-col-xs-13,
     .ant-col-xl-1, .ant-col-xl-2, .ant-col-xl-3, .ant-col-xl-4,
     .ant-col-xl-5, .ant-col-xl-6, .ant-col-xl-7, .ant-col-xl-8, 
     .ant-col-xl-9, .ant-col-xl-10, .ant-col-xl-11, .ant-col-xl-12,
     .ant-col-xl-13, .ant-col-xl-14, .ant-col-xl-15, .ant-col-xl-16, 
     .ant-col-xl-17, .ant-col-xl-18, .ant-col-xl-19, .ant-col-xl-20,
     .ant-col-xl-21, .ant-col-xl-22, .ant-col-xl-23, .ant-col-xl-24,
     .ant-col-xxl-1, .ant-col-xxl-2, .ant-col-xxl-3, .ant-col-xxl-4,
     .ant-col-xxl-5, .ant-col-xxl-6, .ant-col-xxl-7, .ant-col-xxl-8,
     .ant-col-xxl-9, .ant-col-xxl-10, .ant-col-xxl-11, .ant-col-xxl-12,
     .ant-col-xxl-13, .ant-col-xxl-14, .ant-col-xxl-15, .ant-col-xxl-16,
     .ant-col-xxl-17, .ant-col-xxl-18, .ant-col-xxl-19, .ant-col-xxl-20,
     .ant-col-xxl-21, .ant-col-xxl-22, .ant-col-xxl-23, .ant-col-xxl-24
      {
          ${direction === 'rtl' ? { float: 'right' } : 'left'};
     }
     h2 {
        font-size: 2.5em;
        @media (max-width: 576px){
            font-size: 1.5em;
        }
     }
     p {
        font-size: 1.1em;
         @media (max-width: 576px){
            font-size: 1em;
        }
     }
    .ant-layout {
        background: transparent;
    }
    .ant-layout-header {
        height: 0;
        padding: 0;
        z-index: 1000;
        @media (max-width: 576px){
           line-height: 30px;
       }
     }
    .ant-layout-content {
        z-index: 0;
    }
    .ant-layout-footer {
        padding: 0;
     }
  `;

const LandingStyle = WithDirection(LandingWrapper);
export default LandingStyle;
