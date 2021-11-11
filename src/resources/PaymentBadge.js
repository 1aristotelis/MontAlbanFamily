import React from "react";
import { SvgIcon } from "@mui/material";

export default function PaymentBadge() {
  return (
    <SvgIcon focusable="false" viewBox="0 0 20 20" aria-hidden="true">
      <path
        d="M17.3084 6.51104L17.104 7.05724L17.6348 7.2989C18.6626 7.76689 19.375 8.80085 19.375 10C19.375 11.1996 18.6631 12.2339 17.6353 12.7009L17.1037 12.9423L17.3085 13.4891C17.7041 14.5456 17.4765 15.7808 16.6289 16.6292C15.7818 17.4771 14.5469 17.7043 13.489 17.3084L12.9428 17.104L12.7011 17.6348C12.2331 18.6626 11.1991 19.375 10 19.375C8.80085 19.375 7.76689 18.6626 7.2989 17.6348L7.05718 17.1039L6.5109 17.3085C5.45437 17.7041 4.21915 17.4765 3.37075 16.6289C2.52294 15.7818 2.29569 14.5469 2.69159 13.489L2.89599 12.9428L2.36523 12.7011C1.3374 12.2331 0.625 11.1991 0.625 10C0.625 8.80085 1.3374 7.76689 2.36523 7.2989L2.89611 7.05718L2.69154 6.5109C2.29589 5.45437 2.52346 4.21915 3.37113 3.37075C4.21822 2.52294 5.45312 2.29569 6.51104 2.69159L7.05724 2.89599L7.2989 2.36523C7.76689 1.3374 8.80085 0.625 10 0.625C11.1994 0.625 12.2339 1.33759 12.7009 2.36489L12.9425 2.89623L13.4891 2.69154C14.5456 2.29589 15.7808 2.52346 16.6292 3.37113L17.071 2.929L16.6292 3.37113C17.4771 4.21822 17.7043 5.45312 17.3084 6.51104Z"
        fill="#34C74F"
        stroke="white"
        strokeWidth="1.25"
      ></path>
      <path
        d="M10.4119 4.75645V5.38067C10.4119 5.44309 10.4119 5.44309 10.4744 5.44309C10.6616 5.44309 11.2234 5.50551 11.4107 5.50551C11.7228 5.56793 12.0973 5.63035 12.347 5.69277C12.4719 5.7552 12.5343 5.88004 12.5343 6.00489V7.06606C12.5343 7.25332 12.2222 7.44059 12.0349 7.31574H11.9101L11.3483 7.12848C11.161 7.06606 10.9737 7.06606 10.7865 7.00363C10.5992 7.00363 10.4119 6.94121 10.2871 6.94121C10.0374 6.94121 9.85015 6.94121 9.66288 7.00363C9.47561 7.06606 9.35077 7.12848 9.22593 7.1909C9.10108 7.25332 8.97624 7.37817 8.91382 7.44059C8.8514 7.56543 8.78897 7.69028 8.78897 7.81512C8.78897 7.93997 8.8514 8.12723 8.91382 8.18965C8.97624 8.3145 9.10108 8.43934 9.22593 8.50176C9.35077 8.62661 9.53804 8.68903 9.7253 8.81387C9.91257 8.93872 10.1623 9.00114 10.4119 9.12598C10.7865 9.25083 11.0986 9.43809 11.3483 9.62536C11.6604 9.81262 11.8476 9.99989 12.0973 10.1872C12.347 10.3744 12.4719 10.6241 12.5343 10.8738C12.6591 11.1235 12.7216 11.4356 12.7216 11.8101C12.7216 12.3095 12.6591 12.684 12.4719 13.0586C12.2846 13.3707 12.0349 13.6828 11.7228 13.8701C11.4107 14.0573 10.9737 14.2446 10.5992 14.307H10.3495V14.9312C10.3495 15.1185 10.4119 15.5554 9.7253 15.5554H9.22593C8.72655 15.5554 8.53929 15.3682 8.53929 14.9936V14.3694C8.53929 14.3694 8.03991 14.307 7.66538 14.2446C7.29085 14.1822 7.10358 14.0573 6.97874 13.9325C6.6042 13.6828 6.79147 11.8725 7.29085 12.1847C7.54053 12.3095 7.66538 12.4343 7.91507 12.4968C8.35202 12.6216 8.72655 12.7465 9.1635 12.7465C9.41319 12.7465 9.66288 12.7465 9.78772 12.684C9.97499 12.6216 10.1623 12.5592 10.2871 12.4968C10.4119 12.4343 10.5368 12.3095 10.5368 12.1847C10.5992 12.0598 10.6616 11.935 10.6616 11.8101C10.6616 11.6229 10.5992 11.498 10.5368 11.3732C10.4119 11.2483 10.2871 11.1235 10.0998 10.9986C9.91257 10.8738 9.7253 10.749 9.47561 10.6865C9.22593 10.5617 8.97624 10.4993 8.72655 10.3744C8.03991 10.0623 7.54053 9.7502 7.166 9.31325C6.85389 8.87629 6.66663 8.37692 6.66663 7.81512C6.66663 7.37817 6.72905 6.94121 6.91631 6.6291C7.10358 6.31699 7.35327 6.00489 7.66538 5.81762C7.97749 5.63035 7.97749 5.56793 8.41444 5.38067C8.47686 5.38067 8.47686 5.31824 8.47686 5.31824V4.75645C8.47686 4.6316 8.60171 4.44434 8.85139 4.44434H9.91257C10.2247 4.50676 10.4119 4.6316 10.4119 4.75645Z"
        fill="white"
      ></path>
    </SvgIcon>
  );
}
