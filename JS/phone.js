const loadPhone= async (searchText) =>{
          const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
          const data = await res.json();
          const phones= data.data;
          //console.log(phones);
          displayPhones(phones);

}
const displayPhones = phones =>{
         // console.log(phones);
         const phoneContainer=document.getElementById('phone-container');
         phoneContainer.textContent='';

         //display show all btn if there are more than 10
         const showAllContainer=document.getElementById('show-all-btn-container');
         if(phones.length > 9){
            showAllContainer.classList.remove('hidden');
         }
         else{
          showAllContainer.classList.add('hidden');
         }

         //display how many phone you want to see
         phones=phones.slice(0,9);
    phones.forEach(phone => {
          console.log(phone);
          //1.create a div
          const phoneCard=document.createElement('div');
          phoneCard.classList=`card w-84 bg-gray-100 shadow-xl`;
          phoneCard.innerHTML=`
          
       <figure class="px-10 pt-10">
          <img src="${phone.image}" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
        
                    `;
                    phoneContainer.appendChild(phoneCard);
         });
         //hidding loading spinner
         toggleLoadingSpinner(false);
         
}
const handleSearch =() =>{
  toggleLoadingSpinner(true);
         const searchField=document.getElementById('search-field');
         const searchText=searchField.value;
         console.log(searchText);
         loadPhone(searchText);
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
// const handleSearch2 =() =>{
//         const searchField=document.getElementById('search-field2');
//         const searchText=searchField.value;
//         console.log(searchText);
//         loadPhone(searchText);
// }
//loadPhone();