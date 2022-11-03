import React from 'react'

function Services() {
  return (
    <div className='w-9/12 mx-auto mt-5'>
      <p className='text-center text-3xl font-semibold lg:text-5xl text-blue-magenta mb-4'>Services</p>
      <div className=' grid grid-cols-1 lg:grid-cols-2'>
        <div className='flex flex-row m-5 justify-center p-6 shadow-lg md:justify-between rounded-xl bg-wisp-pink'>
          <div className='flex flex-col'>
            <p className='text-3xl font-semibold lg:text-5xl text-dark-gray mb-4'>Nikah</p>   
            <p>There will be some text here that describes the services offered under this category</p>
            <br />
            <p>Nikah İşlemleri icin bilgiler:Evlenmek isteyen şahıslar öncelikle yaşadığı şehirin "City Hall"'ünden 
              "Marriage Certifificate" alması gerekiyor. Orada kendisine "Nerede ve hangi tarihte nikah kıymak istiyorsun?"
               Sorusu sorulacak. Cevap olarak "Ulu Cami ve tarih" söylenecek. Sertifika camimizin imamına imzalatilacak. İmamımız,
                isimleri "Nikah Defteri" ne kaydeder. Sertifikayla City Hall'da resmi nikah kıyabilirler.
            </p>  
          </div>
        </div>
        <div className='flex flex-row m-5 justify-center p-6 shadow-lg md:justify-between rounded-xl bg-wisp-pink'>
          <div className='flex flex-col justify-center'>
            <p className='text-3xl font-semibold lg:text-5xl text-dark-gray mb-4'>Funeral</p> 
            <p>There will be some text here that describes the services offered under this category</p>
            <br />
            <p>
              Ulu Cami Cenaze işlemleri bilgileri:
              Yakını vefat eden cenaze sahipleri, isteğe bağlı olarak Ulu Cami telefonu veya camimizin anlaşmalı 
              Funeral Home Servis numarasını arayabilirler.  Cenazenin hastahaneden alınıp, camimize getirilmesi
              kanuni olarak Funeral Home Servisi'nin işidir. Kabir yerini, cenaze sahibi, şahsen mezarlık 
              müdürlüğüne gidip alması gerekmektedir. Mezar yeri alırken cenazenin Ulu Cami'den geleceğini 
              söylemeleri halinde kabir yeri müslümanlar için ayrılan yerden verilecektir.

              Gerekli irtibat telefon numaraları aşağıdadır.

              Cenaze Servisi / Funeral Home:
              Michigan Memorial Funeral Home
              17 Michigan Ave
              Paterson, NJ 07503 
              Att: Abdullah
              Tel: 973-925-4875

              Mezarlık / Cemetery:
              Laurel Grove Cemetery
              295 Totowa Road
              Totowa, NJ 07512


              Tel: 973-956-0711   
            </p>    
          </div>
        </div>
        <div className='flex flex-row m-5 justify-center p-6 shadow-lg md:justify-between rounded-xl bg-wisp-pink'>
          <div className='flex flex-col justify-center'>
            <p className='text-3xl font-semibold lg:text-5xl text-dark-gray mb-4'>Ceremonies</p>  
            <p>There will be some text here that describes the services offered under this category</p>
            <br />
            <p>
              Mutfak ve salonumuzu mevlut ve nikah tur organizasyonlariniz icin kiralamak mumkundur.  Bilgi icin arayabilirsiniz  
            </p>  
          </div>
        </div>
        <div className='flex flex-row m-5 justify-center p-6 shadow-lg md:justify-between rounded-xl bg-wisp-pink'>
          <div className='flex flex-col justify-center'>
            <p className='text-3xl font-semibold lg:text-5xl text-dark-gray mb-4'>Religious Studies</p> 
            <p>There will be some text here that describes the services offered under this category</p>
            <br />
            <p>
              Cocuklarimiza ve genclerimize Kuran dersleri verilmektedir. Daha fazla bilgi icin lutfen bize ulasin.
            </p>   
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services