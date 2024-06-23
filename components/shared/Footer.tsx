import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" border-t">
      <div className=" flex-center wrapper flex-between flex flex-col gap-5 text-center sm:flex-row">
        <Link href={"/"}>
          <Image
            src={"/assets/images/logo.svg"}
            alt=""
            width={128}
            height={38}
          />
        </Link>
        <p>2020 Evently. All Right Reseverd</p>
      </div>
    </footer>
  );
};

export default Footer;
