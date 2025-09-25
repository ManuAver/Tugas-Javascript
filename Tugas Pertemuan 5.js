// product-manager.ts

type Product = {
  id: number;
  nama: string;
  harga: number;
};

let produkList: Product[] = [
  { id: 1, nama: "Laptop", harga: 12000000 },
  { id: 2, nama: "Smartphone", harga: 5000000 },
  { id: 3, nama: "Tablet", harga: 7000000 },
  { id: 4, nama: "Headset", harga: 500000 },
  { id: 5, nama: "Charger", harga: 250000 }
];

interface EventHandler {
  tambah: (id: number, nama: string, harga: number) => void;
  hapus: (...ids: number[]) => void;
  tampil: () => void;
}

const eventHandler: EventHandler = {
  tambah: (id, nama, harga) => tambahProduk(id, nama, harga),
  hapus: (...ids) => hapusProduk(...ids),
  tampil: () => tampilkanProduk(),
};

function tambahProduk(id: number, nama: string, harga: number): void {
  const produkBaru: Product = { id, nama, harga };
  produkList = [...produkList, produkBaru]; // spread operator
  console.log(`✅ Produk "${nama}" berhasil ditambahkan!`);
}

function hapusProduk(...ids: number[]): void {
  produkList = produkList.filter(p => !ids.includes(p.id)); // rest parameter
  console.log(`❌ Produk dengan ID [${ids}] berhasil dihapus!`);
}

function tampilkanProduk(): void {
  console.log("📦 Daftar Produk:");
  produkList.forEach(({ id, nama, harga }) => { // destructuring
    console.log(`ID: ${id}, Nama: ${nama}, Harga: Rp${harga}`);
  });
  console.log("---------------------------");
}

// simulasi
eventHandler.tampil();
eventHandler.tambah(6, "Monitor", 2500000);
eventHandler.tampil();
eventHandler.hapus(2, 4);
eventHandler.tampil();
