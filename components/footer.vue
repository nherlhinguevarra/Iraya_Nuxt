<template>
    <footer class="bg-[#F3F3F3] w-full">
        <div class="w-[100%] lg:w-[90%] xl:w-[60%] mx-auto px-5">
            <div class="flex flex-col px-5 sm:px-0 sm:flex-row">
                <div class="lg:w-1/2 pt-12">
                    <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/05/updatedIrayaLogo.webp" class="w-[220px] mx-auto lg:ml-0">
                </div>
                <div class="lg:w-1/2">
                    <p class="text-[18px] leading-snug mt-10 text-[#666666] font-semibold">
                        Subscribe to get updates and more.
                    </p>
                    <div class="py-4">
                        <input id="name" type="text" placeholder="Email" class="shadow-[0_10px_40px_rgba(0,0,0,0.3)] rounded-[10px] px-3 py-2 w-full" />
                    </div>
                    <div class="">
                        <button class="bg-[#F47625] text-[white] text-[16px] font-medium shadow-[0_10px_40px_rgba(0,0,0,0.3)] rounded-[50px] px-3 py-2 w-full hover:bg-[#4CBFB4] cursor-pointer">
                            SUBSCRIBE 
                            <i class="bi bi-chevron-right pl-2 text-[16px]"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-2 px-5 sm:px-0 sm:grid-cols-5 sm:gap-y-4 sm:gap-x-0 pt-5">
                <div class="">
                    <h2 class="text-[16px] font-medium text-[#F47625] py-4">PRODUCTS</h2>
                    <NuxtLink to="/products/data-atelier" class="text-[14px] font-medium text-[#666666] cursor-pointer">Data Atelier <br></NuxtLink>
                    <div class="h-1"></div>
                    <NuxtLink to="/products/elasticdocs" class="text-[14px] font-medium text-[#666666] cursor-pointer">ElasticDocs <br></NuxtLink>
                    <div class="h-1"></div>
                    <NuxtLink to="/products/ed2k" class="text-[14px] font-medium text-[#666666] cursor-pointe">ED2K <br></NuxtLink>
                    <div class="h-1"></div>
                    <NuxtLink to="/products/bonaparte-400" class="text-[14px] font-medium text-[#666666] cursor-pointe">Bonaparte 400 <br></NuxtLink>
                </div>

                <div class="">
                    <h2 class="text-[16px] font-medium text-[#F47625] py-4">SERVICES</h2>
                    <NuxtLink to="/services/data-factory" class="text-[14px] font-medium text-[#666666] cursor-pointe">Data Factory <br></NuxtLink>
                    <div class="h-1"></div>
                    <NuxtLink to="/services/knowledge-workflows" class="text-[14px] font-medium text-[#666666] cursor-pointe">Knowledge Workflows <br></NuxtLink>
                </div>

                <div class="">
                    <h2 class="text-[16px] font-medium text-[#F47625] py-4">WHY IRAYA</h2>
                    <NuxtLink to="/about/value-proposition" class="text-[14px] font-medium text-[#666666] cursor-pointe">Value Proposition <br></NuxtLink>
                    <div class="h-1"></div>
                    <NuxtLink to="/about/data-ingestion" class="text-[14px] font-medium text-[#666666] cursor-pointe">Data Ingestion <br></NuxtLink>
                    <div class="h-1"></div>
                    <NuxtLink to="/about/data-digestion" class="text-[14px] font-medium text-[#666666] cursor-pointe">Data Digestion <br></NuxtLink>
                    <div class="h-1"></div>
                    <NuxtLink to="/about/knowledge-extraction" class="text-[14px] font-medium text-[#666666] cursor-pointe">Knowledge Extraction <br></NuxtLink>
                </div>

                <div class="">
                    <h2 class="text-[16px] font-medium text-[#F47625] py-4">RESOURCES</h2>
                    <NuxtLink to="/about/people" class="text-[14px] font-medium text-[#666666] cursor-pointe">People <br></NuxtLink>
                    <div class="h-1"></div>
                    <NuxtLink to="/resources/careers" class="text-[14px] font-medium text-[#666666] cursor-pointe">Careers <br></NuxtLink>
                    <div class="h-1"></div>
                    <NuxtLink to="/resources/blog" class="text-[14px] font-medium text-[#666666] cursor-pointe">Blog <br></NuxtLink>
                    <div class="h-1"></div>
                    <NuxtLink to="/resources/publications" class="text-[14px] font-medium text-[#666666] cursor-pointe">Publications <br></NuxtLink>
                </div>

                <div class="">
                    <h2 class="text-[16px] font-medium text-[#F47625] py-4">GET IN TOUCH</h2>
                    <div class="flex gap-2">
                        <i class="bi bi-twitter-x text-[white] bg-[black] py-3 px-4 rounded-[5px] cursor-pointer"></i>
                        <i class="bi bi-youtube text-[white] bg-[black] py-3 px-4 rounded-[5px] cursor-pointer"></i>
                        <i class="bi bi-wordpress text-[white] bg-[black] py-3 px-4 rounded-[5px] cursor-pointer"></i>
                        <i class="bi bi-linkedin text-[white] bg-[black] py-3 px-4 rounded-[5px] cursor-pointer"></i>
                    </div>
                </div>
            </div>
        </div>

        <div class="h-5"></div>
        <div class="bg-gradient-to-r from-[#F58331] to-[#FC684B] w-full text-center py-10">
            <h1 class="text-[white] text-[18px] font-medium">Copyright © 2024 Iraya Energies. All rights reserved.</h1>
            <div class="h-5"></div>
            <h1 class="text-[white] text-[16px] font-normal italic">Read our privacy statement</h1>
        </div>
    </footer>
</template>