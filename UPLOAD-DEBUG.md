# 🚨 DEBUG: Upload não funciona

## 🔍 POSSÍVEIS CAUSAS:

1. **Convex não deployado com as correções**
2. **Variáveis de ambiente incorretas**  
3. **CORS não configurado**
4. **Tipo de arquivo não suportado**

## 🛠️ TROUBLESHOOTING STEPS:

### 1. VERIFICAR LOGS DA VERCEL
- Vá na Vercel → seu projeto → Functions → View Function Logs
- Faça upload de um arquivo
- Veja qual erro aparece nos logs

### 2. TESTAR TIPOS DE ARQUIVO
Teste com estes arquivos:
- ✅ PNG pequeno (menos de 1MB)
- ✅ JPG pequeno (menos de 1MB)
- ❌ Não teste PDF ou arquivos grandes primeiro

### 3. VERIFICAR VARIÁVEIS NA VERCEL
Confirme se estão EXATAMENTE assim:
```
CONVEX_DEPLOYMENT=dutiful-goshawk-839
NEXT_PUBLIC_CONVEX_URL=https://dutiful-goshawk-839.convex.cloud
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_c2V0dGxpbmctY29icmEtMjYuY2xlcmsuYWNjb3VudHMuZGV2JA
CLERK_SECRET_KEY=sk_test_pYtMFEw1Hm19GwUiq5S7jKuyi4RKPwnEQjQntsV3X8
```

### 4. TESTAR LOCAL COM PROD
Temporariamente, edite seu `.env.local`:
```
CONVEX_DEPLOYMENT=dutiful-goshawk-839
NEXT_PUBLIC_CONVEX_URL=https://dutiful-goshawk-839.convex.cloud
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_c2V0dGxpbmctY29icmEtMjYuY2xlcmsuYWNjb3VudHMuZGV2JA
CLERK_SECRET_KEY=sk_test_pYtMFEw1Hm19GwUiq5S7jKuyi4RKPwnEQjQntsV3X8
```

Execute `npm run dev` e teste upload local.

Se funcionar local = problema na Vercel
Se não funcionar local = problema no Convex

## 📋 PRÓXIMOS PASSOS:

1. **Me mande os logs da Vercel** (passo 1)
2. **Teste local com config de prod** (passo 4)
3. **Me fale qual foi o resultado**
