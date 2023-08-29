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
         phoneContainer.innerText='';
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
         
}
const handleSearch =() =>{
         const searchField=document.getElementById('search-field');
         const searchText=searchField.value;
         console.log(searchText);
         loadPhone(searchText);
}

//loadPhone();