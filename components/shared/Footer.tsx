import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          <Image 
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>
        {/* <p>Eventigo Designed and Developed by Nick Developer and Ankit Choudhary</p> */}
        <p>Eventigo Copyright @2024 All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
