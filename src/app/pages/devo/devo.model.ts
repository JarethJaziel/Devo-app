export interface Devo {
  id?: number;
  date: string;
  title: string;
  content: string;
  verse: string;
  passage: string;
  author: string;
  thought: string;
  response: string;
  bibleInYear: string;
  bibleText: string;
  audioUrl: string;
}

export interface DevoResponse {
  data: Devo;
  formatWhatsapp: string;
  formatWeb: string;
}