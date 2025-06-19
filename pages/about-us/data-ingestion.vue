<template>
    <div class="relative w-screen max-w-full">
    <!-- Fixed background image -->
        <div class="absolute inset-0 bg-[url('https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/06/IRAYA-BACKGROUND.webp')] 
        dark:bg-[url('https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/06/IRAYA-BG-DARK.png')] 
        bg-cover bg-top bg-no-repeat bg-fixed z-0"></div>

        <div class="relative z-10 flex flex-col lg:flex-row w-full h-full px-14 lg:px-4 py-10">
            <!-- SIDE MENU -->
            <div class="w-full mt-32 ml-32 lg:w-1/4 mb-10 hidden lg:block">
                <h1 class="text-[#F47625] text-2xl mb-8 font-semibold">WHY IRAYA?</h1>
                <ul>
                    <li><NuxtLink to="/about-us/value-proposition" class="text-[#535353] text-base font-medium mb-1 hover:text-[#000000]"
                    >Value Proposition</NuxtLink></li>
                    <li><NuxtLink to="/about-us/data-ingestion" class="text-[#535353] text-base font-medium mb-1 hover:text-[#000000]"
                    >Data Ingestion</NuxtLink></li>
                    <li><NuxtLink to="/about-us/data-digestion" class="text-[#535353] text-base font-medium mb-1 hover:text-[#000000]"
                    >Data Digestion</NuxtLink></li>
                    <li><NuxtLink to="/about-us/knowledge-extraction" class="text-[#535353] text-base font-medium mb-1 hover:text-[#000000]"
                    >Knowledge Extraction</NuxtLink></li>
                </ul>
            </div>

            <!-- MAIN CONTENT -->
            <div class="w-full mt-12 mb-12 lg:w-3/4">
                <h1 class="text-[#535353] text-4xl lg:text-5xl leading-tight mb-10 pr-0 lg:pr-40">
                    <span class="text-[#F47625] font-bold">How</span> your      
                    <span class="text-[#2D918C] font-bold">unstructured data</span> 
                    is <span class="font-bold">processed?</span>
                </h1>
                <h2 class="text-[#F47625] text-2xl lg:text-3xl font-bold mb-5">DATA INGESTION</h2>
                <p class="text-[#666666] text-base font-normal mb-6 pr-0 lg:pr-44">
                   Unstructured documents come in a vast range of formats and layouts. The files are commonly in .pdf, 
                   .docx, .xlsx, pptx, .las and .segy formats:
                </p>
                <div class="overflow-x-auto w-full">
                    <table class="table-auto border border-gray-300 border-collapse w-5/6 mb-6 min-w-[600px]">
                        <tbody>
                        <tr>
                            <td class="border border-gray-300 p-2 text-center font-semibold text-[#666666] align-middle">Geology</td>
                            <td class="border border-gray-300 p-2 text-center font-semibold text-[#666666] align-middle">Reservoir<br>engineering</td>
                            <td class="border border-gray-300 p-2 text-center font-semibold text-[#666666] align-middle">Drilling</td>
                            <td class="border border-gray-300 p-2 text-center font-semibold text-[#666666] align-middle">Geomechanics</td>
                            <td class="border border-gray-300 p-2 text-center font-semibold text-[#666666] align-middle">Administrative</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 p-2 text-center font-semibold text-[#666666] align-middle">Geophysics</td>
                            <td class="border border-gray-300 p-2 text-center font-semibold text-[#666666] align-middle">Petrophysics</td>
                            <td class="border border-gray-300 p-2 text-center font-semibold text-[#666666] align-middle">Production</td>
                            <td class="border border-gray-300 p-2 text-center font-semibold text-[#666666] align-middle">Facilities</td>
                            <td class="border border-gray-300 p-2 text-center font-semibold text-[#666666] align-middle">QHSE</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <h2 class="text-[#2D918C] text-2xl font-bold mb-2">TEXT</h2>
                <p class="text-[#666666] text-base font-normal mb-6 pr-0 lg:pr-44">
                    Optical Character Recognition (OCR) is applied to the text segments to convert them into editable text. 
                    Named-entity Recognition (NER) and Pattern-Based Recognition (PBR) techniques are applied to these 
                    OCR results in order to extract metadata from for example a well report such as well name, 
                    kelly-bushing, spud dates, and contractors.
                </p>
                <h2 class="text-[#2D918C] text-2xl font-bold mb-2">IMAGES AND TABLES</h2>
                <p class="text-[#666666] text-base font-normal mb-6 pr-0 lg:pr-44">
                    On a separate data pipeline, the non-text components such as images and tables are tagged and using 
                    deep convolutional neural networks (DCNN), the machine learns to auto classify different image types, 
                    including seismic images, stratigraphic charts, maps, cores, drawings, and tables to enable aggregation 
                    of the images per type.
                </p>

                <!-- IMAGE -->
                <div class="relative inline-block mr-0 lg:mr-44">
                    <!-- Background rectangle with shadow -->
                    <div class="absolute inset-0 bg-gray dark:bg-neutral-900 shadow-2xl rounded-lg" aria-hidden="true"></div>
                    <!-- Transparent image on top -->
                    <img
                        src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/06/Diagram_Large-scale-unstructured-data-processing_210321-1.webp"
                        alt="Large Scale Unstructured Data Processing"
                        class="relative z-10 w-full h-auto object-contain p-10"
                    />
                </div>
            </div>
        </div>
    </div>
</template>