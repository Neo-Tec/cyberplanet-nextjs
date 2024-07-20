"use client";

import React from "react";
// import { Link } from 'react-router-dom'
import Link from "next/link";
import { Icon } from "@iconify/react";
import Div from "../Div";

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link href=" https://www.linkedin.com/company/cyberplanetagency" className="cs-center">
        <Icon icon="fa6-brands:linkedin-in" />
      </Link>
      <Link href=" https://www.facebook.com/profile.php?id=61554791065726" className="cs-center">
        <Icon icon="fa6-brands:facebook" />
      </Link>
      <Link href="https://www.instagram.com/cyberplanet.in?igsh=MWI4N2Qza2t6cWRqcA==" className="cs-center">
        <Icon icon="fa6-brands:instagram" />
      </Link>
      <Link href="https://chat.whatsapp.com/IJhoLQPfsI24kA9DeaLn87" className="cs-center">
        <Icon icon="fa6-brands:whatsapp" />
      </Link>
    </Div>
  );
}
