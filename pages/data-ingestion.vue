<template>
    <div class="relative w-screen max-w-full">
    <!-- Fixed background image -->
        <div class="absolute inset-0 bg-[url('https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/06/IRAYA-BACKGROUND.webp')] bg-cover bg-top bg-no-repeat bg-fixed z-0"></div>

        <div class="relative z-10 flex w-full h-full">
            <div class="w-1/4 mt-20 ml-30 pt-[6.5rem]">
                <h1 class="text-[#F47625] text-2xl mb-8 font-semibold">WHY IRAYA?</h1>
                <ul>
                    <li class="text-[#535353] text-base font-medium mb-1 hover:text-[#000000]">Value Proposition</li>
                    <li class="text-[#535353] text-base font-medium mb-1 hover:text-[#000000]">Data Ingestion</li>
                    <li class="text-[#535353] text-base font-medium mb-1 hover:text-[#000000]">Data Digestion</li>
                    <li class="text-[#535353] text-base font-medium mb-1 hover:text-[#000000]">Knowledge Extraction</li>
                </ul>
            </div>
            <div class="w-3/4 mt-20 p-4">
                <h1 class="text-[#535353] text-5xl leading-[3.75rem] mb-10 pr-40">
                    <span class="text-[#F47625] font-bold">How</span> your      
                    <span class="text-[#2D918C] font-bold">unstructured data</span> 
                    is <span class="font-bold">processed?</span>
                </h1>
                <h2 class="text-[#F47625] text-3xl font-bold mb-5">DATA INGESTION</h2>
                <p class="text-[#666666] text-base font-normal pr-44 mb-6">
                   Unstructured documents come in a vast range of formats and layouts. The files are commonly in .pdf, 
                   .docx, .xlsx, pptx, .las and .segy formats:
                </p>
                <table class="table-auto border border-gray-300 border-collapse w-5/6 mb-6">
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
                <h2 class="text-[#2D918C] text-2xl font-bold mb-2">TEXT</h2>
                <p class="text-[#666666] text-base font-normal pr-44 mb-6">
                    Optical Character Recognition (OCR) is applied to the text segments to convert them into editable text. 
                    Named-entity Recognition (NER) and Pattern-Based Recognition (PBR) techniques are applied to these 
                    OCR results in order to extract metadata from for example a well report such as well name, 
                    kelly-bushing, spud dates, and contractors.
                </p>
                <h2 class="text-[#2D918C] text-2xl font-bold mb-2">IMAGES AND TABLES</h2>
                <p class="text-[#666666] text-base font-normal pr-44 mb-6">
                    On a separate data pipeline, the non-text components such as images and tables are tagged and using 
                    deep convolutional neural networks (DCNN), the machine learns to auto classify different image types, 
                    including seismic images, stratigraphic charts, maps, cores, drawings, and tables to enable aggregation 
                    of the images per type.
                </p>
                <div class="relative inline-block mr-44">
                    <!-- Background rectangle with shadow -->
                    <div class="absolute inset-0 bg-white shadow-2xl rounded-lg" aria-hidden="true"></div>

                    <!-- Transparent image on top -->
                    <img
                        src="https://demoiraya.bicoluni-busina.com/wp-content/uploads/2025/06/Diagram_Large-scale-unstructured-data-processing_210321-1.webp"
                        alt=""
                        class="relative z-10 w-full h-auto object-contain p-10"
                    />
                </div>
            </div>
        </div>
    </div>
</template>