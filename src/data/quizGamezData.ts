// Data soal khusus GAME QUIZ — terpisah dari materi dan latihan mandiri
// Edit file ini untuk mengubah konten Game Quiz tanpa mempengaruhi Materi atau Latihan Mandiri

export interface QuizSoal {
  no: number;
  soal: string;
  options: string[];
}

export interface QuizContent {
  title: string;
  kelas: string;
  backPath: string;
  backLabel: string;
  soal: QuizSoal[];
}

const placeholder = (topik: string): QuizSoal[] => [
  { no: 1, soal: `Manakah yang merupakan contoh ${topik}?`, options: ["A. Pilihan A", "B. Pilihan B", "C. Pilihan C", "D. Pilihan D"] },
  { no: 2, soal: `Tentukan hasil operasi berikut terkait ${topik}!`, options: ["A. 12", "B. 24", "C. 36", "D. 48"] },
  { no: 3, soal: `Sederhanakan bentuk ${topik} berikut ini.`, options: ["A. 4", "B. 6", "C. 8", "D. 10"] },
];

export const quizGamezData: Record<string, QuizContent> = {

  // ===== BILANGAN BULAT =====
  "bilangan-bulat/penjumlahan": {
    title: "GAME QUIZ — PENJUMLAHAN BILANGAN BULAT",
    kelas: "Kelas 7",
    backPath: "/quiz-gamez/bilangan-bulat",
    backLabel: "Bilangan Bulat",
    soal: placeholder("penjumlahan bilangan bulat"),
  },
  "bilangan-bulat/pengurangan": {
    title: "GAME QUIZ — PENGURANGAN BILANGAN BULAT",
    kelas: "Kelas 7",
    backPath: "/quiz-gamez/bilangan-bulat",
    backLabel: "Bilangan Bulat",
    soal: placeholder("pengurangan bilangan bulat"),
  },
  "bilangan-bulat/perkalian": {
    title: "GAME QUIZ — PERKALIAN BILANGAN BULAT",
    kelas: "Kelas 7",
    backPath: "/quiz-gamez/bilangan-bulat",
    backLabel: "Bilangan Bulat",
    soal: placeholder("perkalian bilangan bulat"),
  },
  "bilangan-bulat/pembagian": {
    title: "GAME QUIZ — PEMBAGIAN BILANGAN BULAT",
    kelas: "Kelas 7",
    backPath: "/quiz-gamez/bilangan-bulat",
    backLabel: "Bilangan Bulat",
    soal: placeholder("pembagian bilangan bulat"),
  },

  // ===== ARITMETIKA SOSIAL =====
  "aritmetika-sosial/penjumlahan": {
    title: "GAME QUIZ — HARGA BELI, HARGA JUAL, UNTUNG & RUGI",
    kelas: "Kelas 7",
    backPath: "/quiz-gamez/aritmetika-sosial",
    backLabel: "Aritmetika Sosial",
    soal: placeholder("harga beli, harga jual, untung dan rugi"),
  },

  // Tambahkan topik lain di sini sesuai kebutuhan
};
