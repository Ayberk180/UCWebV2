import React, { useEffect, useState } from 'react'
import ServiceItem from '../components/serviceItem'
import { debounce } from 'debounce'


function Services() {

  var marriageTR = `Nikah İşlemleri icin bilgiler:Evlenmek isteyen şahıslar öncelikle yaşadığı şehirin "City Hall"'ünden 
    "Marriage Certifificate" alması gerekiyor. Orada kendisine "Nerede ve hangi tarihte nikah kıymak istiyorsun?" Sorusu sorulacak. Cevap olarak "Ulu Cami ve tarih" söylenecek. Sertifika camimizin imamına imzalatilacak. İmamımız, isimleri "Nikah Defteri" ne kaydeder. Sertifikayla City Hall'da resmi nikah kıyabilirler.`
  var funeralTR = `Ulu Cami Cenaze işlemleri bilgileri:
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

  Tel: 973-956-0711   `
  var ceremoniesTR = `Mutfak ve salonumuzu mevlut ve nikah tur organizasyonlariniz icin kiralamak mumkundur.  Bilgi icin arayabilirsiniz `
  var religiousStudiesTR = `Cocuklarimiza ve genclerimize Kuran dersleri verilmektedir. Daha fazla bilgi icin lutfen bize ulasin.`
  
  return (
    <div className='w-9/12 mx-auto mt-5'>
      <p className='mb-4 text-3xl font-semibold text-center lg:text-5xl text-blue-magenta'>Services</p>
      <div className='grid grid-cols-1 lg:grid-cols-1'>
        <ServiceItem title="Nikah" body={marriageTR} />
        <ServiceItem title="Funeral" body={funeralTR} />
        <ServiceItem title="Ceremony" body={ceremoniesTR} />
        <ServiceItem title="Religious Studies" body={religiousStudiesTR} />
      </div>
    </div>
  )
}

export default Services