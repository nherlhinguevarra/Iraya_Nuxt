<template>
    <header class="bg-white p-4 flex justify-between items-center">
    <img src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/03/Iraya-Logo_Horizontal_w-Slogan-2_110521-small-1.webp"
    alt="iraya-logo" class="h-12 w-auto pl-4"/>
    <nav class="space-x-6">
        <NuxtLink to="/" class="hover:text-blue-600 text-[15px] font-semibold">Home</NuxtLink>
        <div class="relative group inline-block">
            <NuxtLink to="/blog" class="hover:text-blue-600 text-[15px] font-semibold">
            Products v</NuxtLink>
            <div class="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300 z-50">
                <ul class="py-2 text-sm text-gray-700">
                    <li>
                        <NuxtLink to="/products/data-atelier" class="block px-4 py-2 hover:bg-gray-100">
                            Data Atelier
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/products/elasticdocs" class="block px-4 py-2 hover:bg-gray-100">
                            ElasticDocs
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/products/bonaparte-400" class="block px-4 py-2 hover:bg-gray-100">
                            Bonaparte 400
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/products/ed2k" class="block px-4 py-2 hover:bg-gray-100">
                            ED2K
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
        <NuxtLink to="/blog" class="hover:text-blue-600 text-[15px] font-semibold">Demo</NuxtLink>
        <NuxtLink to="/blog" class="hover:text-blue-600 text-[15px] font-semibold">Pricing</NuxtLink>
        <NuxtLink to="/blog" class="hover:text-blue-600 text-[15px] font-semibold">Services</NuxtLink>
        <NuxtLink to="/blog" class="hover:text-blue-600 text-[15px] font-semibold">About Us</NuxtLink>
        <NuxtLink to="/blog" class="hover:text-blue-600 text-[15px] font-semibold">Resources</NuxtLink>
    </nav>
    </header>
</template>
