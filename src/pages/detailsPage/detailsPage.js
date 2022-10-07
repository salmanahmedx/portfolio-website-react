import React from 'react';
import "./detailsPage.css"


const DetailsPage = () => {

    const expandServiceList = (e) => {
        console.log(e.target.classList.contains("heading-1-text"))
        console.log(e.target.parentElement.nextSibling.classList)
        if (e.target.classList.contains("heading-1-text") && e.target.parentElement.nextSibling.classList.contains("subServices")) {
            e.target.parentElement.nextSibling.classList.toggle("hide")
        }
    }

    const expandServiceDetails = (e) => {
        //use switch statement
        if (e.target.classList.contains("subService-1")) {
            document.querySelector(".service-detials-intro").textContent = "Pardon The fdsafsdafasfdas"
        }
        if (e.target.classList.contains("subService-2")) {
            document.querySelector(".service-detials-intro").textContent = "Not pardon the hahahaafkhjsdtjhkafukl"
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
                    <div className="subServices-1 subServices">
                        <div className="subService-1" onClick={expandServiceDetails}>Prototyping</div>
                        <div className="subService-2" onClick={expandServiceDetails}>Animation</div>
                        <div className="subService-3" onClick={expandServiceDetails}>Content Creation</div>
                    </div>
                </div>
                {/* ============================================================ */}


            </div >
            {/* service details section */}
            <div div className="about basis-3/5" onClick={expandServiceList} >
                <h1 className='animated-about-heading'>Service Details</h1>
                <h3 className='service-detials-intro'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quas ad praesentium est cupiditate fugiat repellendus natus. Officiis, velit quo?</h3>
                <p className='service-details-paragraph'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut pariatur nihil molestias sapiente accusamus unde quia corporis, vitae ipsa magnam placeat suscipit commodi sint ipsam aliquid incidunt aperiam, dignissimos similique iste repellat eaque velit. Corporis.</p>
            </div >

        </div >
    );
};

export default DetailsPage;