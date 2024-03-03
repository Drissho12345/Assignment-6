const discussContainer = async() =>{
    const res =await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    const data =await res.json();
    // console.log(data);
    const allData = data.posts;
    // console.log(allData);
    discussCard(allData);
}
const discussCard = (allData) =>{
    const cardData = document.getElementById('discussContainer');
    allData.forEach(singleData => {
        // console.log(singleData)
        // creat a div
        const div =document.createElement('div');
        div.classList = "mulish mt-12 grid grid-cols-2  gap-96";
        div.innerHTML = `
        <div class="hero gap-1 ">
                    <div class="p-10 w-[772px] shadow rounded-3xl bg-[#F3F3F5] border">
                      <figure class="absolute ">
                        <div class="pl-14">
                            <div class="absolute w-[15px] rounded-2xl bg-green-600 h-[15px]"></div>
                        </div>
                        <img src="${singleData.image}" class=" bg-white rounded-2xl border-red-600 h-[72px] w-[72px] "/>
                      </figure>
    
                     <div class="pl-24">
                        <div class="flex gap-5">
                            <div class="text-[14px] text-[#12132DCC]"># <span>${singleData.category}</span></div>
                            <div class="text-[14px] text-[#12132DCC]">Author : ${singleData.author.name}</div>
                        </div>
                        <h1 class="text-xl pt-3 text-[#12132D] font-bold">${singleData.title}</h1>
                        <p class="py-6 text-[#12132D99] text-[16px]">${singleData.description}</p>
                        <div class="border w-full border-dashed border-[#12132D40]"></div>
                        <div class="flex justify-between pt-5">
                            <div class="flex gap-6">
                                <div class="flex gap-2">
                                    <div class="text-[#12132D99]">
                                    <img src="images/tabler-icon-message-2.svg" alt="">
                                    </div>
                                    <div class="font-bold text-[#12132D99]">${singleData.comment_count}</div>
                                </div>
                                <div class="flex gap-2">
                                    <div class="text-[#12132D99]">
                                    <img src="images/tabler-icon-eye.svg" alt="">
                                    </div>
                                    <div class="font-bold text-[#12132D99]">${singleData.view_count}</div>
                                </div>
                                <div class="flex gap-2">
                                    <div class="text-[#12132D99]">
                                    <img src="images/tabler-icon-clock-hour-9.svg" alt="">
                                    
                                    </div>
                                    <div class="font-bold text-[#12132D99] text-[16px]">${singleData.posted_time } min</div>
                                </div>
                            </div>
                            <button class="add-btn"><img src="images/email 1.svg"></button>
                        </div>
                      </div>
                    </div>
                  </div>
        `;
        cardData.appendChild(div)
        
    });
}




const latestPostContainer = async() =>{
  const res =await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
  const data =await res.json();
  // console.log(data);
  const allData2 = data;
  console.log(allData2);
  postContent(allData2);
}

const postContent = (allData2) =>{
  const latestCard =document.getElementById('leatest-container');
  allData2.forEach((postData) =>{
    // console.log(postData)
    const div3 =document.createElement('div');
    div3.classList = "card border shadow-xl";
    div3.innerHTML = `
    <figure><img class="m-6 w-[326px] h-[190px] border rounded-3xl" src="${postData.cover_image}" /></figure>
                <div class="card-body">
                    <div class="flex gap-3">
                        <img class="" src="images/Frame.svg" alt="">
                        <p class="text-[#12132D99] font-bold text-[18px]">${postData.author.posted_date}</p>
                    </div>
                  <h2 class="card-title text-[#12132D]">${postData.title}</h2>
                  <p class="text-[#12132D99] text-[16px]">${postData.description}</p>
                  <div class="card-actions">
                    <div>
                        <img class=" h-11 w-11 rounded-[50%]" src="${postData.profile_image}" alt="">
                    </div>
                    <div>
                        <p class="text-[#12132D] font-bold text-[16px]">${postData.author.designation}</p>
                        <p class="text-[#12132D] text-[14px]">${postData.author.name}</p>
                    </div>
                  </div>
                </div>
    `;
    latestCard.appendChild(div3)
  })
  
} 

latestPostContainer()
discussContainer()