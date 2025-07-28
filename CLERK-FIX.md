# 🚨 CORREÇÃO URGENTE - Clerk não funciona em produção

## Problema
- Clerk funciona em dev (`localhost:3000`)
- Não funciona no deploy da Vercel

## ✅ SOLUÇÃO PASSO A PASSO

### 1. CONFIGURAR CLERK DASHBOARD

1. **Acesse:** https://clerk.com → seu projeto
2. **Configure Domains:**
   - Menu: **"Domains"**
   - Adicione: `https://SEU-APP.vercel.app` (substitua pelo seu domínio real)

3. **Configure Redirect URLs:**
   - Na mesma tela de Domains
   - Adicione todos estes URLs (substitua SEU-APP):
   ```
   https://SEU-APP.vercel.app
   https://SEU-APP.vercel.app/sign-in
   https://SEU-APP.vercel.app/sign-up
   https://SEU-APP.vercel.app/dashboard/files
   ```

4. **Configure Paths:**
   - Menu: **"Paths"**
   - Sign-in URL: `/sign-in`
   - Sign-up URL: `/sign-up`
   - After sign-in: `/dashboard/files`
   - After sign-up: `/dashboard/files`

### 2. VERIFICAR VARIÁVEIS NA VERCEL

Confirme se estas variáveis estão EXATAMENTE assim na Vercel:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_c2V0dGxpbmctY29icmEtMjYuY2xlcmsuYWNjb3VudHMuZGV2JA
CLERK_SECRET_KEY=sk_test_pYtMFEw1Hm19GwUiq5S7jKuyi4RKPwnEQjQntsV3X8
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard/files
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard/files
```

### 3. REDEPLOY APÓS CONFIGURAR

Depois de configurar o Clerk:
```bash
# Força um novo deploy
git add .
git commit -m "Fix Clerk production config"
git push origin main
```

OU

- Vercel Dashboard → seu projeto → Deployments → Redeploy

### 4. TESTE

Acesse: `https://seu-app.vercel.app/sign-in`

---

## 🆘 SE AINDA NÃO FUNCIONAR

**Me envie:**
1. URL exato do seu app na Vercel
2. Screenshot do erro que aparece
3. Se redireciona para algum lugar ou só não carrega

**Possíveis erros adicionais:**
- Chaves do Clerk são de desenvolvimento (precisam ser de produção)
- Domínio não foi salvo corretamente no Clerk
- Cache do browser (tente modo incógnito)

---

**IMPORTANTE:** Clerk tem chaves diferentes para dev e produção. Se suas chaves têm `test_` são de desenvolvimento e podem não funcionar 100% em produção mesmo configurando os domínios.
