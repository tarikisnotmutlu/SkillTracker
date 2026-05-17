// api/auth.js
export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { password } = req.body;
  const correct = process.env.SKILL_PASSWORD;

  if (!correct) return res.status(500).json({ error: 'SKILL_PASSWORD env var eksik' });

  if (password === correct) {
    const token = process.env.AUTH_TOKEN || 'tarik_auth_2026';
    // HttpOnly yok — JS ile okunabilmesi için
    res.setHeader('Set-Cookie',
      `skill_auth=${token}; Secure; SameSite=Strict; Max-Age=${60 * 60 * 24 * 30}; Path=/`
    );
    return res.status(200).json({ ok: true });
  }

  return res.status(401).json({ error: 'Yanlış şifre' });
}
