const loadPhone= async (searchText='samsung', isShowAll) =>{
          const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
          const data = await res.json();
          const phones= data.data;
          //console.log(phones);
          displayPhones(phones,isShowAll);

}
const displayPhones = (phones,isShowAll) =>{
         // console.log(phones);
         const phoneContainer=document.getElementById('phone-container');
         phoneContainer.textContent='';

         //display show all btn if there are more than 10
         const showAllContainer=document.getElementById('show-all-btn-container');
         if(phones.length > 12 && !isShowAll){
            showAllContainer.classList.remove('hidden');
         }
         else{
          showAllContainer.classList.add('hidden');
         }

         //display how many phone you want to see
         if(!isShowAll){
          phones=phones.slice(0,12);
         }
    phones.forEach(phone => {
         // console.log(phone);
          //1.create a div
          const phoneCard=document.createElement('div');
          phoneCard.classList=`card w-84 bg-gray-100 shadow-xl`;
          phoneCard.innerHTML=`
          
       <figure class="px-10 pt-10 ">
          <img src="${phone.image}" />
        </figure>
        <div class="card-body items-center text-center bg-black-400">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>There are many variations of passages of available, but the majority have suffered</p>
          <div class="card-actions">
            <button onclick="handleShowDetails('${phone.slug}')" class="btn btn-primary bg-[#36D399] text-white">Show Details</button>
          </div>
        </div>
        
                    `;
                    phoneContainer.appendChild(phoneCard);
         });
         //hiding loading spinner
         toggleLoadingSpinner(false);
         
}
//show details
const handleShowDetails = async(id) =>{
  //console.log('show details clicked',id);
  // load single data
  const res= await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
  const data= await res.json();
  const phone=data.data;

  showPhoneDetails(phone);
}

const showPhoneDetails= (phone) =>{
  console.log(phone);

  //const phoneName=document.getElementById('show-detail-phone-name');
  //phoneName.innerText=phone.name;
  const showDetailContainer=document.getElementById('show-detail-container');
  showDetailContainer.innerHTML=`
  <div class="card card-compact w-96 bg-base-100 ">
  <figure class="w-80"><img src="${phone.image}" alt="Shoes" /></figure>
  <div class="card-body">
  <p>There are many variations of passages of available, but the majority have suffered</p>
    <h2 class="card-title">${phone.name}</h2>
    
    <p><span class="text-xl font-semibold">Storage : </span>${phone?.mainFeatures?.storage}</p>
    <p><span class="text-xl font-semibold">Display : </span>${phone?.mainFeatures?.displaySize}</p>
    <p><span class="text-xl font-semibold">ChipSet : </span>${phone?.mainFeatures?.chipSet}</p>
    <p><span class="text-xl font-semibold">Bluetooth : </span>${phone?.others?.Bluetooth}</p>
    <p><span class="text-xl font-semibold">Gps : </span>${phone?.others?.GPS}</p>
    <p><span class="text-xl font-semibold">Brand : </span class="font-semibold">${phone?.brand}</p>
    <p><span class="text-xl font-semibold">Release Date : </span>${phone?.releaseDate}</p>
    <p><span class="text-xl font-semibold">Slug : </span>${phone?.slug}</p>
    
  </div>
</div>
  `;
  

  //show modal
  show_details_modal.showModal();
  //toggleLoadingSpinner(true);
}

const handleSearch =(isShowAll) =>{
  toggleLoadingSpinner(true);
         const searchField=document.getElementById('search-field');
         const searchText=searchField.value;
         console.log(searchText);
         loadPhone(searchText,isShowAll);
}
const toggleLoadingSpinner= (isLoading) =>{
  const loadingSpinner=document.getElementById('loading-spinner');
 
  if(isLoading){
    loadingSpinner.classList.remove('hidden');
  }
  else{
    loadingSpinner.classList.add('hidden');
  }
}

//handle show all
const handleShowAll = () =>{
  handleSearch(true);
}
// const handleSearch2 =() =>{
//         const searchField=document.getElementById('search-field2');
//         const searchText=searchField.value;
//         console.log(searchText);
//         loadPhone(searchText);
// }
loadPhone();