import React, { useEffect, useState } from 'react';
import "./detailsPage.css";

const DetailsPage = () => {

    const skillDetails = [{
        "intro": "lorem2 jdaskjf hjska fskja hfakj hfskajhf kjsahf slkajhf skjlahf sjkahf kjah jkah ljkhakj",
        "details": "123lroe kjfksdh kfha dskjfhs kjfah kjah fkjah fkjahf kjafh kjlah fjklah jkahkj hakj hjkla hjkah kjah jksah kjah kjsah kjah kh lkjah fkjahjkfl ahkj hfajkh sjklfah fsjklafhf jksahjk hajk hkjsah kjash kjahskj hfsakjls hfkja hkjlahkjl"
    },
    {
        "intro": "lorem2 jdaskjf hjska fskja hfakj hfskajhf kjsahf slkajhf skjlahf sjkahf kjah jkah ljkhakj",
        "details": "123lroe kjfksdh kfha dskjfhs kjfah kjah fkjah fkjahf kjafh kjlah fjklah jkahkj hakj hjkla hjkah kjah jksah kjah kjsah kjah kh lkjah fkjahjkfl ahkj hfajkh sjklfah fsjklafhf jksahjk hajk hkjsah kjash kjahskj hfsakjls hfkja hkjlahkjl"
    },
    {
        "intro": "98f732e iofyiue yf982 yiu2hf io2uy89 fhhy20yf 092",
        "details": "lroe kjfksdh kfha dskjfhs kjfah kjah fkjah fkjahf kjafh kjlah lorem2 jdaskjf hjska fskja hfakj hfskajhf kjsahf slkajhf skjlahf sjkahf kjah jkah ljkhakj hkjsah kjash kjahskj hfsakjls hfkja hkjlahkjl"
    },
    {
        "intro": "lorem2 jdaskjf hjska fskja hfakj hfskajhf kjsahf slkajhf skjlahf sjkahf kjah jkah ljkhakj",
        "details": "lroe kjfksdh kfha dskjfhs kjfah kjah fkjah fkjahf kjafh kjlah fjklah jkahkj hakj hjkla hjkah kjah jksah kjah kjsah kjah kh lkjah fkjahjkfl ahkj hfajkh sjklfah fsjklafhf jksahjk hajk hkjsah kjash kjahskj hfsakjls hfkja hkjlahkjl"
    },
    {
        "intro": "98f732e iofyiue yf982 yiu2hf io2uy89 fhhy20yf 092",
        "details": "lroe kjfksdh kfha dskjfhs kjfah kjah fkjah fkjahf kjafh kjlah lorem2 jdaskjf hjska fskja hfakj hfskajhf kjsahf slkajhf skjlahf sjkahf kjah jkah ljkhakj hkjsah kjash kjahskj hfsakjls hfkja hkjlahkjl"
    }
    ]

    const expandServiceList = (e) => {
        if ((e.target.classList.contains("heading-1-text")) && (e.target.parentElement.nextSibling.classList.contains("subServices"))) {
            e.target.parentElement.nextSibling.classList.toggle("hide");
        }
    }

    const expandServiceDetails = (e) => {
        console.log()

        if (e.target.classList.contains("subService-1")) {
            document.querySelector(".service-detials-intro").textContent = skillDetails[0].intro;
            document.querySelector(".service-details").textContent = skillDetails[0].details;
        }
        if (e.target.classList.contains("subService-2")) {
            document.querySelector(".service-detials-intro").textContent = skillDetails[1].intro;
            document.querySelector(".service-details").textContent = skillDetails[1].details;
        }
        if (e.target.classList.contains("subService-3")) {
            document.querySelector(".service-detials-intro").textContent = skillDetails[2].intro;
            document.querySelector(".service-details").textContent = skillDetails[2].details;
        }
        if (e.target.classList.contains("subService-4")) {
            document.querySelector(".service-detials-intro").textContent = skillDetails[3].intro;
            document.querySelector(".service-details").textContent = skillDetails[3].details;
        }
        if (e.target.classList.contains("subService-5")) {
            document.querySelector(".service-detials-intro").textContent = skillDetails[4].intro;
            document.querySelector(".service-details").textContent = skillDetails[4].details;
        }
    }
    return (
        <div className='container flex'>
            {/* service section */}
            <div className="services basis-2/5">
                <h1 className='animated-services-heading'>Services</h1>

                {/* ============================================= single service */}
                <div className="service-1" onClick={expandServiceList}>
                    <div className="service-1-heading">
                        <div className='collapse-indicator'></div>
                        <h3 className='heading-1-text text-lg font-semibold'>Design</h3>
                    </div>
                    <div className="subServices-1 subServices ml-4">
                        <div className="subService-1" onClick={expandServiceDetails}>Prototyping</div>
                        <div className="subService-2" onClick={expandServiceDetails}>Animation</div>
                        <div className="subService-3" onClick={expandServiceDetails}>Content Creation</div>
                        <div className="subService-4" onClick={expandServiceDetails}>Content Creation</div>
                        <div className="subService-5" onClick={expandServiceDetails}>Content Creation</div>
                    </div>
                </div>
                {/* =========================================================== */}


            </div >
            {/* service details section */}
            <div div className="about basis-3/5" onClick={expandServiceList} >
                <h1 className='animated-about-heading'>Service Details</h1>
                <h3 className='service-detials-intro'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quas ad praesentium est cupiditate fugiat repellendus natus. Officiis, velit quo?</h3>
                <p className='service-details'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut pariatur nihil molestias sapiente accusamus unde quia corporis, vitae ipsa magnam placeat suscipit commodi sint ipsam aliquid incidunt aperiam, dignissimos similique iste repellat eaque velit. Corporis.</p>
            </div >

        </div >
    );
};

export default DetailsPage;