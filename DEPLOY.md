# File Drive - Instruções de Deploy para Vercel

## Problemas Comuns e Soluções

### 1. Upload de Arquivos Não Funciona no Deploy

**Possíveis causas:**
- Variáveis de ambiente não configuradas corretamente
- Problemas de CORS
- Timeouts de função
- Problemas de autenticação Clerk

**Soluções:**

1. **Configurar Variáveis de Ambiente na Vercel:**
   ```bash
   # No painel da Vercel, adicione estas variáveis:
   CONVEX_DEPLOYMENT=seu_deployment_convex
   NEXT_PUBLIC_CONVEX_URL=https://seu_app.convex.cloud
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...
   CLERK_WEBHOOK_SECRET=whsec_...
   ```

2. **Configurar Domínio no Convex:**
   - No dashboard do Convex, adicione o domínio da Vercel nas configurações
   - Certifique-se de que o CORS está configurado para aceitar requisições do seu domínio

3. **Verificar Configuração do Clerk:**
   - No dashboard do Clerk, adicione o domínio da Vercel
   - Configure os URLs de redirecionamento

### 2. Tema Dark Não Funciona

**Correções aplicadas:**
- Removidas variáveis CSS `--success` problemáticas
- Corrigido o componente Toast para usar cores do Tailwind
- Melhorado o contraste das cores no tema dark

### 3. Erros de Tipos de Arquivo

**Melhorias aplicadas:**
- Adicionado suporte para mais tipos de arquivo (JPEG, GIF, WebP, Excel)
- Implementada validação de tamanho (máximo 50MB)
- Melhor tratamento de erros no upload

## Como Deploy na Vercel

1. **Conectar Repositório:**
   ```bash
   # Certifique-se de que o código está no GitHub
   git add .
   git commit -m "Fix upload and theme issues"
   git push origin main
   ```

2. **Configurar Projeto na Vercel:**
   - Acesse [vercel.com](https://vercel.com)
   - Importe o repositório do GitHub
   - Configure as variáveis de ambiente (ver seção acima)

3. **Configurar Build Settings:**
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

4. **Deploy:**
   - A Vercel fará o deploy automaticamente
   - Monitore os logs para possíveis erros

## Checklist de Verificação

- [ ] Todas as variáveis de ambiente configuradas
- [ ] Domínio adicionado no Convex
- [ ] URLs configurados no Clerk
- [ ] Convex deployment publicado (`npx convex deploy`)
- [ ] Build local funciona (`npm run build`)

## Monitoramento

Após o deploy, verifique:
1. Upload de arquivos funciona
2. Tema dark/light funcionam
3. Autenticação funciona
4. Listagem de arquivos funciona

## Problemas Específicos da Vercel

Se ainda houver problemas com upload:

1. **Verificar Function Timeout:**
   - Uploads grandes podem precisar de mais tempo
   - Configure timeout nas funções serverless

2. **Verificar Body Size Limit:**
   - Vercel tem limite de 4.5MB para body de requisição
   - Para arquivos maiores, use upload direto para Convex

3. **Logs da Vercel:**
   - Acesse Function Logs no dashboard da Vercel
   - Identifique erros específicos durante o upload
