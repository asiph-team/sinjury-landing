import Link from "next/link";

interface Props{
    title: string;
    route: string;
    isBold: boolean;
  
  }
  export const HeaderTitle = ({title,isBold,route }:Props) => {
      const textBold = isBold ? 'font-extrabold' : '';
      const className =`inline-block  text-white no-underline hover:text-white-800 hover:text-underline py-2 px-4 ${textBold}`
      return (
        <Link href={route}>
            <a className={className}>{title}</a>
        </Link>

        )
    }
  

    
    