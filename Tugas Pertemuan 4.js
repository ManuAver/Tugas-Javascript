// Class Kendaraan (Super Class)
class Kendaraan {
  constructor(merk, model, tahun) {
    this.merk = merk;
    this.model = model;
    this.tahun = tahun;
  }

  infoKendaraan() {
    return `${this.merk} ${this.model} (${this.tahun})`;
  }
}

// Class Turunan: Mobil
class Mobil extends Kendaraan {
  constructor(merk, model, tahun) {
    super(merk, model, tahun);
  }

  infoKendaraan() {
    return `${super.infoKendaraan()} - Mobil`;
  }
}

// Class Turunan: Motor
class Motor extends Kendaraan {
  constructor(merk, model, tahun) {
    super(merk, model, tahun);
  }

  infoKendaraan() {
    return `${super.infoKendaraan()} - Motor`;
  }
}

// Class Pelanggan
class Pelanggan {
  constructor(nama, nomorTelepon) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = null;
  }

  sewaKendaraan(kendaraan) {
    this.kendaraanDisewa = kendaraan;
    console.log(`${this.nama} menyewa: ${kendaraan.infoKendaraan()}`);
  }

  infoPelanggan() {
    return `${this.nama} (${this.nomorTelepon}) - Sewa: ${
      this.kendaraanDisewa
        ? this.kendaraanDisewa.infoKendaraan()
        : "Belum sewa"
    }`;
  }
}

// Sistem Manajemen Transportasi
class SistemTransportasi {
  constructor() {
    this.daftarPelanggan = [];
  }

  tambahPelanggan(pelanggan) {
    this.daftarPelanggan.push(pelanggan);
  }

  tampilkanPelanggan() {
    console.log("\nDaftar Pelanggan yang sedang menyewa kendaraan:");
    this.daftarPelanggan.forEach((p, i) => {
      console.log(`${i + 1}. ${p.infoPelanggan()}`);
    });
  }
}

// ------------------
// Contoh Cara Kerja Penggunaan
// ------------------

// Buat kendaraan
const mobil1 = new Mobil("Toyota", "Avanza", 2022);
const mobil2 = new Mobil("Toyota", "Supra", 2020);
const mobil3 = new Mobil("Toyota", "Yaris", 2018);
const motor1 = new Motor("Honda", "CBR", 2021);
const motor2 = new Motor("Honda", "Vario", 2020);
const motor3 = new Motor("Honda", "Beat", 2022);

// Buat pelanggan
const pelanggan1 = new Pelanggan("Rizky", "081234567890");
const pelanggan2 = new Pelanggan("Maya", "089876543210");
const pelanggan3 = new Pelanggan("Madun", "089876543210");
const pelanggan4 = new Pelanggan("Udin", "089876543210");
const pelanggan5 = new Pelanggan("Tanjiro", "089876543210");

// Catat penyewaan
pelanggan1.sewaKendaraan(mobil1);
pelanggan2.sewaKendaraan(motor3);
pelanggan3.sewaKendaraan(mobil2);
pelanggan4.sewaKendaraan(motor1);
pelanggan5.sewaKendaraan(mobil3);

// Buat sistem transportasi
const sistem = new SistemTransportasi();
sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);
sistem.tambahPelanggan(pelanggan3);
sistem.tambahPelanggan(pelanggan4);
sistem.tambahPelanggan(pelanggan5);

// Tampilkan daftar pelanggan
sistem.tampilkanPelanggan();
