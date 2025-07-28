# 🚀 Passo a Passo: Redeploy File Drive na Vercel

## Situação Atual
- Deploy já foi feito na Vercel
- Precisa verificar/corrigir configurações baseadas no seu `.env.local`

## ⚠️ IMPORTANTE: Ambiente de Produção vs Desenvolvimento

Seu `.env.local` atual está configurado para **DESENVOLVIMENTO**:
```bash
CONVEX_DEPLOYMENT=dev:upbeat-wolf-752  # <- AMBIENTE DE DEV
```

Para produção, você precisa criar um deployment separado no Convex.

---

## 📋 PASSO A PASSO COMPLETO

### 1. ✅ Deploy de Produção no Convex (JÁ EXISTE)

Seu projeto já possui um deployment de produção:
- **URL de Produção:** `https://dutiful-goshawk-839.convex.cloud`
- **Deployment ID:** `dutiful-goshawk-839`

⚠️ **IMPORTANTE:** Você precisa fazer push do código atual para produção:

```bash
# No terminal do seu projeto:
cd "c:\Users\zuado\ignite\file-drive"

# Fazer deploy para produção (tente novamente)
npx convex deploy

# Se der erro, tente:
npx convex auth

# E depois:
npx convex deploy
```

### 2. Configurar Variáveis de Ambiente na Vercel

Acesse o painel da Vercel e configure estas variáveis EXATAS:

```bash
# Convex - VALORES ESPECÍFICOS PARA SEU PROJETO
CONVEX_DEPLOYMENT=dutiful-goshawk-839
NEXT_PUBLIC_CONVEX_URL=https://dutiful-goshawk-839.convex.cloud

# Clerk - SEUS VALORES ATUAIS (mantenha exatamente como estão)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_c2V0dGxpbmctY29icmEtMjYuY2xlcmsuYWNjb3VudHMuZGV2JA
CLERK_SECRET_KEY=sk_test_pYtMFEw1Hm19GwUiq5S7jKuyi4RKPwnEQjQntsV3X8

# URLs do Clerk (adicione se não existirem)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard/files
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard/files
```

### 3. Configurar Domínios no Clerk

1. Acesse [clerk.com](https://clerk.com) → seu projeto
2. Vá em **Domains**
3. Adicione seu domínio da Vercel (ex: `your-app.vercel.app`)
4. Configure os **Redirect URLs**:
   - `https://your-app.vercel.app/sign-in`
   - `https://your-app.vercel.app/sign-up`
   - `https://your-app.vercel.app/dashboard/files`

### 4. Configurar CORS no Convex

1. Acesse [convex.dev](https://convex.dev) → seu projeto
2. Vá em **Settings** → **Environment Variables**
3. Em **HTTP Actions**, adicione seu domínio da Vercel
4. Certifique-se de que o CORS está configurado para aceitar seu domínio

### 5. Fazer Redeploy na Vercel

Opção A - **Redeploy Automático:**
```bash
# Faça um commit para triggar novo deploy
git add .
git commit -m "Configure production environment"
git push origin main
```

Opção B - **Redeploy Manual:**
1. Acesse o painel da Vercel
2. Vá no seu projeto
3. Clique em **Redeploy** na última build

### 6. Verificar Build Settings na Vercel

Certifique-se de que está configurado:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

---

## 🔍 TROUBLESHOOTING

### Se o Upload Ainda Não Funcionar:

1. **Verificar Logs da Vercel:**
   ```bash
   # Na Vercel Dashboard:
   Seu Projeto → Functions → View Function Logs
   ```

2. **Testar Localmente com Prod:**
   ```bash
   # Configure .env.local temporariamente com valores de prod
   # Teste se funciona localmente
   npm run dev
   ```

3. **Verificar Convex Schema:**
   ```bash
   # Certifique-se de que o schema foi deployado
   npx convex deploy --prod
   ```

### Problemas Comuns e Soluções:

**❌ Erro: "You do not have access to this org"**
- Verifique se as variáveis do Clerk estão corretas
- Confirme se os URLs de redirect estão configurados

**❌ Erro: "Failed to generate upload URL"**
- Verifique se `CONVEX_DEPLOYMENT` aponta para produção
- Confirme se `NEXT_PUBLIC_CONVEX_URL` está correto

**❌ Upload falha silenciosamente:**
- Verifique CORS no Convex
- Confirme se o domínio da Vercel foi adicionado

---

## ✅ CHECKLIST FINAL

Após seguir todos os passos, verifique:

- [ ] Deployment de produção criado no Convex
- [ ] Variáveis de ambiente configuradas na Vercel
- [ ] Domínio adicionado no Clerk
- [ ] URLs de redirect configurados
- [ ] CORS configurado no Convex
- [ ] Novo deploy feito na Vercel
- [ ] Upload de arquivo funcionando
- [ ] Tema dark/light funcionando
- [ ] Autenticação funcionando

---

## 🆘 SE AINDA HOUVER PROBLEMAS

Me envie:
1. URL do seu app na Vercel
2. Logs de erro específicos
3. Em qual etapa está falhando (login, upload, etc.)

E eu te ajudo com uma solução mais específica!
