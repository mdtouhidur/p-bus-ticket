


const selectAllBusSit = document.getElementsByClassName('selectBusSit');
let countNumber = 0;
for(const singleSelectBusSit of selectAllBusSit){
    singleSelectBusSit.addEventListener('click', function(event){
        countNumber = countNumber + 1;

        // singleSelectBusSit.classList.add('bg-[#10ba10c6]');

        const showDiscountBox = document.getElementById('showDiscountBox');
        showDiscountBox.classList.remove("hidden");

        


        

       



        if(countNumber <= 4){
            selectSitNumber('seat',countNumber);
            event.target.setAttribute("disabled", false);
            event.target.setAttribute("enabled", true);
            

            

            
        }
        else{
         alert("চারটে সিট বেশি ক্রয় করা যাবে না \n No more than four seats can be purchased ")
        } 



        
        
        
        const Seatsleft = document.getElementById('Seatsleft').innerText;
        const cvtrSeatsleft = parseInt(Seatsleft);
         const sitNumbers = document.getElementById('Seatsleft').innerText =cvtrSeatsleft - 1;
        if(sitNumbers < 36){
            console.log('not a selected');
             sitNumbers = document.getElementById('Seatsleft').innerText = 36;
            
        }
        

            //    if(cvtrSeatsleft <= sitNumber){
            //     document.getElementById('Seatsleft').innerText =cvtrSeatsleft - 1;
            //    }
            //    else{
            //     alert()
            //    }

        
 
        const TotalPrice = document.getElementById('TotalPrice').innerText;
        const cvtrTotalPrice =  parseInt(TotalPrice);


        
        const correntcvtrTotalPrice =document.getElementById("TotalPrice").innerText = cvtrTotalPrice + 550;
        document.getElementById('GrandTotal').innerText = correntcvtrTotalPrice;


        // const correntcvtrTotalPrice = cvtrTotalPrice + 550;

        if( correntcvtrTotalPrice > 2200){
            correntcvtrTotalPrice = document.getElementById("TotalPrice").innerText =parseInt(2200) ;
            
        }


const sitNumber = event.target.innerText;
const selectedSitDataBox = document.getElementById('showSeatList');

const createALiTag = document.createElement('li');

const createASampTag1 =document.createElement('samp');
createASampTag1.innerText = sitNumber;
createALiTag.appendChild(createASampTag1);

const createASampTag2 =document.createElement('samp');
createASampTag2.innerText = 'Economoy';
createALiTag.appendChild(createASampTag2);

const createASampTag3 =document.createElement('samp');
createASampTag3.innerText = 550;

createALiTag.appendChild(createASampTag3);
selectedSitDataBox.appendChild(createALiTag);


    })}
       

function CouponCodeChalk(){
    const TotalPrice = document.getElementById('TotalPrice').innerText;
    const cvtrTotalPrice =  parseInt(TotalPrice);

          console.log(cvtrTotalPrice);

    const CouponCode1 = 'Couple20';
    const CouponCode2 = 'NEW15';
    let discountPrice = 0;
    const CouponCodeChalking = document.getElementById('CouponCodeChalk').value;
    if(CouponCodeChalking == CouponCode1){
        discountPrice = cvtrTotalPrice * 20 / 100;
        const finalDiscount = cvtrTotalPrice - discountPrice
        document.getElementById('GrandTotal').innerText = finalDiscount;
        const showDiscountBox = document.getElementById('showDiscountBox');
        showDiscountBox.classList.add("hidden");

    }
    else if(CouponCodeChalking == CouponCode2){
        discountPrice = cvtrTotalPrice * 15 / 100;
        const finalDiscount = cvtrTotalPrice - discountPrice
        document.getElementById('GrandTotal').innerText = finalDiscount;
        const showDiscountBox = document.getElementById('showDiscountBox');
        showDiscountBox.classList.add("hidden");
    }
    else{
        alert("আপনার কুপন কোড টি এই ডিসকাউন্ট অফার এর সাথে মিলছে না. \n Your coupon code does not match this discount offer.");

    }




    

}

















function selectSitNumber(id,event){
    document.getElementById(id).innerText = event;
}