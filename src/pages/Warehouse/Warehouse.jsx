import React from 'react'
import Polymer from "../../assets/singularity/Polymer1.png";
import Logo from "../../assets/singularity/Logo.png";
import Image1 from "../../assets/singularity/warehouse/Sing_Warehouse1.jpg";
import Image2 from "../../assets/singularity/warehouse/Sing_Warehouse2.jpg";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaGlobe } from "react-icons/fa";




const Warehouse = () => {
    const homeStyle = {
        backgroundImage: `url(${Polymer})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
    };

    const purchaseOrderAutomation = [
        {
            img: 'https://cdni.iconscout.com/illustration/premium/thumb/male-investor-investing-money-5684689-4744547.png?f=webp',
            title: 'Inventory Monitoring ORDER',
            desc: `When stock is low, automated
            alerts trigger the purchase order
            process.`,
        },
        {
            img: 'https://cdni.iconscout.com/illustration/premium/thumb/order-confirmation-5365232-4500195.png?f=webp',

            title: 'Order Generation',
            desc: `Ai generates a purchase order
            based on demand prediction and
            predefined business rules.`,
        },
        {
            img: 'https://cdni.iconscout.com/illustration/premium/thumb/global-logistic-distribution-service-7982024-6382402.png?f=webp',

            title: 'Supplier Acknowledgement',
            desc: `Supplier acknowledges the purchase
            order, and all steps get recorded on
            the blockchain creating an auditable
            history.`,
        },
        {
            img: 'https://cdni.iconscout.com/illustration/premium/thumb/shipment-tracking-4472426-3858231.png?f=webp',

            title: 'Shipment',
            desc: `Ai based notifications inform the
            warehouse about the shipment
            status and upon delivery
            confirmation the blockchain record is
            updated.`,
        },
        {
            img: 'https://cdni.iconscout.com/illustration/premium/thumb/warehouse-worker-checking-inventory-9174404-7481960.png?f=webp',

            title: 'Inventory Update',
            desc: `Ai performs automated quality
            checks and then updates inventory
            evels accordingly.
            updated.`,
        },
        {
            img: 'https://cdni.iconscout.com/illustration/premium/thumb/salary-payment-3494676-2939366.png?f=webp',

            title: 'Payment',
            desc: `Blockchain triggers payment
            based on predefined terms and
            quality checks.`,
        }
    ]

    const modernizedShipping = [
        {
            img: 'https://cdn3d.iconscout.com/3d/premium/thumb/shipping-service-4804307-4010738.png?f=webp',
            title: 'Shipper',
            desc: `Shipper initiates and tracks
            shipments, securely
            recording key shipping
            details on the blockchain.`,
        },
        {
            img: 'https://cdn3d.iconscout.com/3d/premium/thumb/delivery-boy-doing-air-delivery-8561231-6741457.png?f=webp',

            title: 'Freight Forwarder',
            desc: `Freight forwarder manages
            logistics and automates shipping
            processes, ensuring secure and
            efficient transactions on the
            blockchain.`,
        },
        {
            img: 'https://cdn3d.iconscout.com/3d/premium/thumb/delivery-location-6938268-5690944.png?f=webp',

            title: 'Shipping Line',
            desc: `Shipper initiates and tracks
            shipments, securely
            recording key shipping
            details on the blockchain.`,
        },
        {
            img: 'https://cdn3d.iconscout.com/3d/premium/thumb/port-11189863-8949626.png?f=webp',

            title: 'Port Customs',
            desc: `Port customs authorities validate
            and record shipping-related
            information, promoting efficient
            clearance and compliance with
            regulations on the blockchain`,
        },
        {
            img: 'https://cdn3d.iconscout.com/3d/premium/thumb/secure-blockchain-5847978-4897784.png?f=webp',

            title: 'Consignee',
            desc: `Consignees receive and
            confirm shipments, accessing
            secure records and ensuring
            transparency in the supply
            chain on the blockchain.`,
        },

    ]

    const team = [
        {
            avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "Martiana dialan",
            title: "70% leaner workforcel",
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Daniel martin",
            title: "25% cost savings",
        },
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Micheal colorand",
            title: "30% savings in customer service",
        },

        {
            avatar: "https://randomuser.me/api/portraits/men/46.jpg",
            name: "Vicky tanson",
            title: "20% reduction in maintenance costs.",
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Brown Luis",
            title: "30% reduction in fraud",
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/29.jpg",
            name: "Nilson kalin",
            title: "20% savings in HR administrative costs",
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/63.jpg",
            name: "Lysa sandiago",
            title: "30% cost savings",
        },



    ]
    return (
        <div className='h-auto'>

            {/* page 1 */}
            <div className='grid place-items-center' style={homeStyle}>
                <div className='h-full flex flex-col justify-center items-center py-10'>
                    <img src={Logo} className=' w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem] md:w-[25rem] md:h-[25rem] lg:w-[30rem] lg:h-[30rem]' alt="" />
                    <p className="bg-gradient-to-r text-2xl sm:text-2xl md:text-4xl lg:text-5xl max-w-2xl  text-center from-blue-100 via-blue-300 to-blue-500 bg-clip-text text-transparent">
                        Automation in Warehousing and Shipping
                    </p>

                </div>
            </div>

            {/* page 1 */}
            {/* <div className="w-full bg-gradient-to-r from-[#0C3C8E] to-[#996CE6] bg-white grid grid-cols-3 place-items-center py-4 text-white">
                {
                    [{ name: `+1(205)515-6265`, icon: <IoIosCall size={30} /> }, { name: `info@blockcoder.net`, icon: <IoMdMail size={30} /> }, { name: `www.snglrity.com`, icon: <FaGlobe size={30} /> }]?.map(item => {
                        return <div className='flex justify-start items-center gap-1'>{item?.icon}{item?.name}</div>
                    })
                }
            </div> */}
            {/* Before page 2 */}
            <div style={homeStyle}>
                <section className="py-14 text-white">
                    <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
                        <div className="max-w-sm sm:max-w-xl md:max-w-3xl mx-auto">
                            <h3 className=" text-xl font-semibold sm:text-3xl md:text-5xl">
                                Impact of Ai on Organization
                                Structure
                            </h3>
                        </div>
                        <div className="mt-12">
                            <ul className="grid gap-8 md:grid-cols-2">
                                {
                                    team.map((item, idx) => (
                                        <li key={idx}>
                                            <div className="w-20 h-20 mx-auto">
                                                <img
                                                    src={item.avatar}
                                                    className="w-full h-full rounded-full"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="mt-2">

                                                <p className="text-indigo-600 bg-white rounded-xl py-2 font-medium cursor-pointer transition-all ring-4 hover:ring-8 ring-indigo-600/40">{item.title}</p>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            {/* Before page 2 */}

            {/* page 2 */}
            <div style={homeStyle}>
                <section className="py-14 text-white">
                    <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
                        <div className="max-w-sm md:max-w-xl mx-auto">
                            <h3 className=" text-3xl font-semibold sm:text-6xl">
                                Purchase Order
                                Automation
                            </h3>
                        </div>
                        <div className="mt-12">
                            <ul className="grid gap-8 sm:grid-cols-2 ">
                                {
                                    purchaseOrderAutomation.map((item, idx) => (
                                        <li key={idx}>
                                            <div className="w-24 h-24 mx-auto">
                                                <img
                                                    src={item.img}
                                                    className="w-full h-full rounded-full"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="mt-2">
                                                <h4 className=" font-semibold sm:text-lg">{item.title}</h4>
                                                <p className="max-w-md mx-auto mt-2">{item.desc}</p>
                                                {/* <div className="mt-4 flex justify-center gap-4 ">
                                                    <a href={item.twitter}>
                                                        <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="currentColor" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_80)"><path fill="currentColor" d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z" /></g><defs><clipPath id="clip0_17_80"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                                    </a>
                                                    <a href={item.linkedin}>
                                                        <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="none" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_68)"><path fill="currentColor" d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z" /></g><defs><clipPath id="clip0_17_68"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                                    </a>
                                                </div> */}
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            {/* page 2 */}


            {/* page 3 */}
            <div className='grid place-items-center' style={homeStyle}>
                <section className="py-14 text-white">
                    <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
                        {/* <div className=" max-w-md md:max-w-xl lg:max-w-3xl mx-auto">
                            <h3 className=" text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
                                Understanding the Key
                                Components of Blockchain
                            </h3>
                        </div> */}
                        <div className="mt-12 grid md:grid-cols-2 place-items-center max-w-[800px mx-auto">
                            <img className='mix-blend-screen' src={Image2} alt="" /> <img className='mix-blend-screen' src={Image1} alt="" />
                        </div>
                    </div>
                </section>
            </div>
            {/* page 3 */}



            {/* page 4 */}
            <div style={homeStyle}>
                <section className="py-14 text-white">
                    <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
                        {/* <div className="max-w-sm md:max-w-xl mx-auto">
                            <h3 className=" text-3xl font-semibold sm:text-6xl">
                                Purchase Order
                                Automation
                            </h3>
                        </div> */}
                        <div className="mt-12">
                            <ul className="flex justify-center items-center gap-[5.5rem] flex-wrap  mx-auto ">
                                {
                                    modernizedShipping.map((item, idx) => (
                                        <li className='bg-black/50 relative w-[300px] cursor-pointer group rounded-lg p-2 h-[300px] grid place-items-center' key={idx}>
                                            <div className="w-44 h-w-44 absolute  translate-x-[-50%] translate-y-[-50%] top-0 left-[50%]  mx-auto">
                                                <img
                                                    src={item.img}
                                                    className="w-full h-full rounded-full "
                                                    alt=""
                                                />
                                            </div>
                                            <div className="mt-2">
                                                <h4 className=" font-semibold sm:text-lg">{item.title}</h4>
                                                <p className="max-w-md mx-auto mt-2">{item.desc}</p>

                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            {/* page 4 */}



        </div>
    )
}

export default Warehouse