import { css } from 'styled-components';

const variables = css`
  :root {
    /* Current Theme
    --dark-navy: #020c1b;
    --navy: #0a192f;
    --light-navy: #112240;
    --lightest-navy: #233554;
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --dark-slate: #495670;
    --slate: #8892b0;
    --light-slate: #a8b2d1;
    --lightest-slate: #ccd6f6;
    --white: #e6f1ff;
    --green: #64ffda;
    */
   
    /* Nordic Theme
    --dark-navy: #2E3440;
    --navy: #3B4252;
    --light-navy: #434C5E;
    --lightest-navy: #4C566A;
    --navy-shadow: rgba(46, 52, 64, 0.7);
    --dark-slate: #D8DEE9;
    --slate: #E5E9F0;
    --light-slate: #ECEFF4;
    --lightest-slate: #FFFFFF;
    --white: #FFFFFF;
    --green: #88C0D0;
    */
   
    /* Deep Purple
    --dark-navy: #1A0B2E;
    --navy: #281854;
    --light-navy: #392B68;
    --lightest-navy: #4B3F82;
    --navy-shadow: rgba(26, 11, 46, 0.7);
    --dark-slate: #B4A5E5;
    --slate: #C8B9FF;
    --light-slate: #DCD1FF;
    --lightest-slate: #F0E9FF;
    --white: #FFFFFF;
    --green: #9D72FF;
    */
   
    /* Ocean Depths
    --dark-navy: #1B2A41;
    --navy: #324A5F;
    --light-navy: #436B83;
    --lightest-navy: #5889A5;
    --navy-shadow: rgba(27, 42, 65, 0.7);
    --dark-slate: #A3C9D9;
    --slate: #B8E3FF;
    --light-slate: #D1EDFF;
    --lightest-slate: #E8F7FF;
    --white: #FFFFFF;
    --green: #5CDBF0;
    */

   /* Vercel Inspired
   --dark-navy: #000000;
   --navy: #111111;
   --light-navy: #333333;
   --lightest-navy: #444444;
   --navy-shadow: rgba(0, 0, 0, 0.7);
   --dark-slate: #888888;
   --slate: #999999;
   --light-slate: #EEEEEE;
   --lightest-slate: #F5F5F5;
   --white: #FFFFFF;
   --green: #50E3C2;
   */
   
   /* GitHub Dark    */
   --dark-navy: #0D1117;
   --navy: #161B22;
   --light-navy: #475569;
   --lightest-navy: #30363D;
   --navy-shadow: rgba(13, 17, 23, 0.7);
   --dark-slate: #8B949E;
   --slate: #C9D1D9;
   --light-slate: #E6EDF3;
   --lightest-slate: #F0F6FC;
   --white: #FFFFFF;
   --green: #7EE787;
*/

   /* Stripe Modern 
   --dark-navy: #02042B;
   --navy: #0A2540;
   --light-navy: #123456;
   --lightest-navy: #234567;
   --navy-shadow: rgba(2, 4, 43, 0.7);
   --dark-slate: #67758D;
   --slate: #87959F;
   --light-slate: #E3E8EE;
   --lightest-slate: #F8FAFC;
   --white: #FFFFFF;
   --green: #00D4FF;
   */
   
   /* Linear App 
   --dark-navy: #101112;
   --navy: #171717;
   --light-navy: #1A1A1A;
   --lightest-navy: #242424;
   --navy-shadow: rgba(0, 0, 0, 0.7);
   --dark-slate: #A1A1A1;
   --slate: #E5E5E5;
   --light-slate: #F2F2F2;
   --lightest-slate: #FAFAFA;
   --white: #FFFFFF;
   --green: #5E6AD2;
   */

   */ my theme */
   --dark-navy: #2C3333;    // Dark charcoal
   --navy: #2C3444;         // Deep rust
   --green: #7EC8E8;        // Sky blue
   
   --light-navy: #3F4545;
   --lightest-navy: #333333;
   --navy-shadow: rgba(44, 51, 51, 0.7);
   --slate: #E5E9F0;
   --light-slate: #ECEFF4;
   --lightest-slate: #FFFFFF;


    --green-tint: rgba(100, 255, 218, 0.1);
    --pink: #f57dff;
    --blue: #57cbff;

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
