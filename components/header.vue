<template>
    <header class="fixed top-0 left-0 right-0 z-50 bg-white py-1" style="box-shadow: 1px 0px 15px -4px rgba(0, 0, 0, 0.5);">
        <div class="w-full flex justify-between items-center px-4">
            <!-- Left: Logo -->
            <img
                src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/03/Iraya-Logo_Horizontal_w-Slogan-2_110521-small-1.webp"
                alt="iraya-logo"
                class="h-12 w-auto"
            />

            <!-- Right: Hamburger (Mobile) and Desktop Nav -->
            <div class="flex items-center space-x-0 lg:space-x-6">
                <!-- Hamburger (Mobile) -->
                <button @click="toggleMenu" class="md:hidden text-[#F47734] focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                <!-- Shared Navigation (hidden on mobile unless toggled) -->
                <nav
                :class="[
                    'text-[15px] font-semibold',
                    isOpen ? 'block md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6' : 'hidden md:flex md:space-x-6'
                ]"
                class="absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent px-6 md:px-0 py-2 md:py-0 z-40"
                >

                    <!-- Navigation Links -->
                    <div class="py-1">
                        <NuxtLink to="/" :class="[ $route.path === '/' ? 'text-[#F47734]' : 'text-black', 'hover:text-[#F47734]' ]">Home</NuxtLink>
                    </div>

                    <!-- Products Dropdown -->
                    <div class="group relative md:relative" @click="toggleDropdown('products')">
                        <div class="flex items-center justify-between cursor-pointer py-1 md:justify-start hover:[color:#F47734]">
                            <NuxtLink to="/products" :class="[ $route.path === '/products' ? 'text-[#F47734]' : 'text-black', 'hover:text-[#F47734]' ]">Products</NuxtLink>
                            <i class="fa-solid fa-chevron-down text-xs ml-2 mt-1"></i>
                        </div>

                        <div class="w-full md:w-40 bg-white shadow-lg transition-opacity duration-300 z-50 md:absolute md:left-0 md:right-auto md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible"
                            :class="[
                                showDropdown.products ? 'block' : 'hidden',
                                'md:block md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible'
                            ]"
                            style="border-top: 4px solid #F47734;"
                        >
                            <ul class="py-2 text-sm text-black-700">
                                <li><NuxtLink to="/products/data-atelier" class="block px-4 py-2 hover:bg-gray-100">Data Atelier</NuxtLink></li>
                                <li><NuxtLink to="/products/elasticdocs" class="block px-4 py-2 hover:bg-gray-100">ElasticDocs</NuxtLink></li>
                                <li><NuxtLink to="/products/bonaparte" class="block px-4 py-2 hover:bg-gray-100">Bonaparte 400</NuxtLink></li>
                                <li><NuxtLink to="/products/ed2k" class="block px-4 py-2 hover:bg-gray-100">ED2K</NuxtLink></li>
                            </ul>
                        </div>
                    </div>

                    <div class="py-1">
                        <NuxtLink to="/demo" :class="[ $route.path === '/demo' ? 'text-[#F47734]' : 'text-black', 'hover:text-[#F47734]' ]">Demo</NuxtLink>
                    </div>
                    <div class="py-1">
                        <NuxtLink to="/pricing" :class="[ $route.path === '/pricing' ? 'text-[#F47734]' : 'text-black', 'hover:text-[#F47734]' ]">Pricing</NuxtLink>
                    </div>

                    <!-- Services Dropdown -->
                    <div class="group relative md:relative" @click="toggleDropdown('services')">
                        <div class="flex items-center justify-between cursor-pointer py-1 md:justify-start hover:[color:#F47734]">
                            <NuxtLink to="/services" :class="[ $route.path === '/services' ? 'text-[#F47734]' : 'text-black', 'hover:text-[#F47734]' ]">Services</NuxtLink>
                            <i class="fa-solid fa-chevron-down text-xs ml-2 mt-1"></i>
                        </div>
                        <div class="w-full md:w-40 bg-white shadow-lg transition-opacity duration-300 z-50 md:absolute md:left-0 md:right-auto md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible"
                            :class="[
                                showDropdown.services ? 'block' : 'hidden',
                                'md:block md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible'
                            ]"
                            style="border-top: 4px solid #F47734;"
                        >
                            <ul class="py-2 text-sm text-black-700">
                                <li><NuxtLink to="/data-factory" class="block px-4 py-2 hover:bg-gray-100">Data Factory</NuxtLink></li>
                                <li><NuxtLink to="/knowledge-workflows" class="block px-4 py-2 hover:bg-gray-100">Knowledge Workflows</NuxtLink></li>
                            </ul>
                        </div>
                    </div>

                    <!-- About Us Dropdown -->
                    <div class="group relative md:relative" @click="toggleDropdown('about')">
                        <div class="flex items-center justify-between cursor-pointer py-1 md:justify-start hover:[color:#F47734]">
                            <NuxtLink to="/about" :class="[ $route.path === '/about' ? 'text-[#F47734]' : 'text-black', 'hover:text-[#F47734]' ]">About</NuxtLink>
                            <i class="fa-solid fa-chevron-down text-xs ml-2 mt-1"></i>
                        </div>
                        <div class="w-full md:w-40 bg-white shadow-lg transition-opacity duration-300 z-50 md:absolute md:left-0 md:right-auto md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible"
                            :class="[
                                showDropdown.about ? 'block' : 'hidden',
                                'md:block md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible'
                            ]"
                            style="border-top: 4px solid #F47734;"
                        >
                            <ul class="py-2 text-sm text-black-700">
                                <li><NuxtLink to="/value-proposition" class="block px-4 py-2 hover:bg-gray-100">Value Proposition</NuxtLink></li>
                                <li><NuxtLink to="/people" class="block px-4 py-2 hover:bg-gray-100">People</NuxtLink></li>
                                <li><NuxtLink to="/partners" class="block px-4 py-2 hover:bg-gray-100">Partners</NuxtLink></li>
                                <li><NuxtLink to="/contactus" class="block px-4 py-2 hover:bg-gray-100">Contact Us</NuxtLink></li>
                            </ul>
                        </div>
                    </div>

                    <!-- Resources Dropdown -->
                    <div class="group relative md:relative" @click="toggleDropdown('resources')">
                        <div class="flex items-center justify-between cursor-pointer py-1 md:justify-start hover:[color:#F47734]">
                            <NuxtLink to="/resources" :class="[ $route.path === '/resources' ? 'text-[#F47734]' : 'text-black', 'hover:text-[#F47734]' ]">Resources</NuxtLink>
                            <i class="fa-solid fa-chevron-down text-xs ml-2 mt-1"></i>
                        </div>
                        <div class="w-full md:w-40 bg-white shadow-lg transition-opacity duration-300 z-50 md:absolute md:left-0 md:right-auto md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible"
                            :class="[
                                showDropdown.resources ? 'block' : 'hidden',
                                'md:block md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible'
                            ]"
                            style="border-top: 4px solid #F47734;"
                        >
                            <ul>
                                <li><NuxtLink to="/resources/brochure" class="block px-4 py-2 hover:bg-gray-100">Brochure</NuxtLink></li>
                                <li><NuxtLink to="/resources/publications" class="block px-4 py-2 hover:bg-gray-100">Publications</NuxtLink></li>
                                <li><NuxtLink to="/resources/blog" class="block px-4 py-2 hover:bg-gray-100">Blogs</NuxtLink></li>
                                <li><NuxtLink to="/resources/careers" class="block px-4 py-2 hover:bg-gray-100">Careers</NuxtLink></li>
                                <li><NuxtLink to="/resources/privacy-statement" class="block px-4 py-2 hover:bg-gray-100">Privacy Statement</NuxtLink></li>
                                <li><NuxtLink to="/resources/cookie-policy" class="block px-4 py-2 hover:bg-gray-100">Cookie Policy</NuxtLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
    <div class="h-12"></div>
</template>

<script setup>
    import { ref } from 'vue'

    const isOpen = ref(false)
    const toggleMenu = () => {
    isOpen.value = !isOpen.value
    }

    const showDropdown = ref({
    products: false,
    services: false,
    about: false,
    resources: false
    })

    const toggleDropdown = (menu) => {
    if (window.innerWidth < 768) {
        for (let key in showDropdown.value) {
        showDropdown.value[key] = (key === menu) ? !showDropdown.value[key] : false
        }
    }
    }
</script>
