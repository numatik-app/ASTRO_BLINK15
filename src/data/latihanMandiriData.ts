// Data soal khusus LATIHAN MANDIRI — terpisah dari materi dan game quiz
// Edit file ini untuk mengubah konten Latihan Mandiri tanpa mempengaruhi Materi atau Game Quiz

export interface LatihanSoal {
  no: number;
  soal: string;
  options?: string[]; // opsional: untuk soal essay tidak perlu options
}

export interface LatihanMandiriContent {
  title: string;
  kelas: string;
  backPath: string;
  backLabel: string;
  soal: LatihanSoal[];
}

export const latihanMandiriData: Record<string, LatihanMandiriContent> = {

  // ===== ARITMETIKA SOSIAL =====
  "aritmetika-sosial/penjumlahan": {
    title: "LATIHAN MANDIRI — HARGA BELI, HARGA JUAL, UNTUNG & RUGI",
    kelas: "Kelas 7",
    backPath: "/latihan-mandiri/aritmetika-sosial",
    backLabel: "Aritmetika Sosial",
    soal: [
      {
        no: 1,
        soal: "Seorang penjual tas membeli sebuah tas ransel seharga Rp150.000,00. Ia kemudian berhasil menjual tas tersebut kepada pelanggannya dengan harga Rp180.000,00. Hitunglah berapa rupiah keuntungan yang didapatkan oleh penjual tersebut! Nyatakan pula keuntungan itu dalam bentuk persentase.",
      },
      {
        no: 2,
        soal: "Pemilik toko elektronik menjual sebuah smartwatch bekas dengan harga Rp900.000,00. Dari penjualan tersebut, ia mengklaim telah mengantongi keuntungan sebesar 20%. Berapakah modal awal yang dikeluarkan pemilik toko saat menebus smartwatch itu?",
      },
      {
        no: 3,
        soal: "Ibu Darni memborong 30 kg telur ayam langsung dari peternak dengan total harga Rp750.000,00. Telur-telur tersebut kemudian ia ecerkan di warungnya dengan harga Rp28.000,00 per kilogram. Analisislah, apakah Ibu Darni mengalami keuntungan atau kerugian? Nyatakan status untung atau ruginya dalam nominal rupiah dan persen.",
      },
      {
        no: 4,
        soal: "Pak Anton memborong 20 helai kaus polos seharga Rp600.000,00. Kaus-kaus tersebut kemudian ia jual kembali secara eceran. Sebanyak 10 helai kaus berhasil terjual dengan harga Rp45.000,00 per helai, 8 helai laku terjual saat promo seharga Rp35.000,00 per helai, dan sisanya ia pakai sendiri untuk olahraga. Tentukan apakah Pak Anton mendapatkan keuntungan atau menelan kerugian, lalu nyatakan dalam rupiah dan persen!",
      },
      {
        no: 5,
        soal: "Sebuah kedai membeli 50 cup puding premium dengan total modal Rp750.000,00. Sebanyak 20 cup diborong oleh panitia acara rapat dengan margin keuntungan 10% (dari harga modal per cup), sedangkan sisanya dipajang di etalase dan laku terjual eceran seharga Rp18.000,00 per cup. Hitunglah keseluruhan keuntungan yang diraup kedai tersebut dalam wujud rupiah dan persentasenya!",
      },
      {
        no: 6,
        soal: "Kak Rina membeli sebuah meja lipat seharga Rp350.000,00 saat ia baru masuk kuliah. Setelah lulus dan harus pindah kota, ia terpaksa menjual meja lipat preloved tersebut dan laku seharga Rp245.000,00. Berapa rupiah nilai penyusutan (kerugian) yang dialami Kak Rina? Nyatakan pula kerugian tersebut ke dalam bentuk persen!",
      },
      {
        no: 7,
        soal: "Pak Rendi terpaksa menjual ponsel pintarnya karena sedang membutuhkan dana cepat. Ia menjual ponsel tersebut dengan harga Rp1.600.000,00. Dari hasil penjualan itu, Pak Rendi harus menelan kerugian sebesar 20% dari modal awalnya. Berapakah harga beli ponsel tersebut saat pertama kali Pak Rendi membelinya?",
      },
      {
        no: 8,
        soal: "Deni membeli sebuah sepeda gunung bekas di pasar loak seharga Rp450.000,00. Karena kondisinya kurang prima, Deni membawa sepeda tersebut ke bengkel dan menghabiskan biaya Rp150.000,00 untuk mengganti rantai dan ban yang aus. Setelah sepeda kembali bagus, Deni menjualnya ke teman sekolahnya dan berhasil meraup keuntungan sebesar 25%. Berapa rupiahkah harga jual sepeda tersebut?",
      },
      {
        no: 9,
        soal: "Bu Tari memborong 100 kg buah mangga dari petani dengan total harga Rp1.500.000,00. Setelah disortir, ternyata ada 10 kg mangga yang busuk dan tidak bisa dijual sama sekali. Jika Bu Tari ingin tetap mendapatkan keuntungan total sebesar 20% dari modal awalnya, berapakah harga jual per kilogram yang harus ia tetapkan untuk sisa mangga yang kondisinya masih bagus?",
      },
      {
        no: 10,
        soal: "Pak Johan ingin membeli sebuah sepeda motor listrik. Harga tunai motor tersebut adalah Rp20.000.000,00. Namun, dealer menawarkan opsi kredit dengan syarat: Uang Muka (DP) sebesar Rp5.000.000,00 dan cicilan per bulan sebesar Rp700.000,00 selama 3 tahun. Berapa persentase total biaya tambahan yang harus ditanggung Pak Johan jika ia memilih opsi kredit dibandingkan dengan jika ia membelinya secara tunai?",
      },
    ],
  },

  // Tambahkan topik lain di sini sesuai kebutuhan
  // Contoh:
  // "bilangan-bulat/penjumlahan": {
  //   title: "LATIHAN MANDIRI — PENJUMLAHAN BILANGAN BULAT",
  //   kelas: "Kelas 7",
  //   backPath: "/latihan-mandiri/bilangan-bulat",
  //   backLabel: "Bilangan Bulat",
  //   soal: [ ... ],
  // },
};
