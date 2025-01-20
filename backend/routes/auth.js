const express = require('express');
const router = express.Router();
const User = require('../models/User');

const tempOtpStorage = {}; // Geçici OTP saklama

// OTP Oluşturma
router.post('/otp-generate', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Telefon numarası gerekli!' });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  tempOtpStorage[email] = otp;

  console.log(`OTP oluşturuldu: ${otp} - Telefon: ${email}`);
  res.status(200).json({ message: 'OTP başarıyla oluşturuldu!' });
});

// OTP Doğrulama
router.post('/otp-verify', async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ message: 'Telefon numarası ve OTP gerekli!' });
  }

  if (tempOtpStorage[email] !== otp) {
    return res.status(400).json({ message: 'OTP doğrulama hatalı!' });
  }

  delete tempOtpStorage[email]; // OTP doğrulandıktan sonra bellekteki OTP'yi sil
  console.log('OTP doğrulandı!');
  res.status(200).json({ message: 'OTP doğrulandı!' });
});

// Kullanıcı Kaydı
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Bu telefon numarası zaten kayıtlı!' });
    }

    const user = new User({ email, password });
    await user.save();

    res.status(201).json({ message: 'Kayıt başarılı!', user });
  } catch (error) {
    res.status(500).json({ message: 'Bir hata oluştu!', error });
  }
});

// Giriş Yap
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Telefon numarası veya şifre hatalı!' });
    }

    res.status(200).json({ message: 'Giriş başarılı!', user });
  } catch (error) {
    res.status(500).json({ message: 'Bir hata oluştu!', error });
  }
});

module.exports = router;
