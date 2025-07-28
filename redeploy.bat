@echo off
echo 🚀 Script de Redeploy File Drive - Execute estes comandos um por vez

echo.
echo ===================================
echo 1. FAZER DEPLOY DO CONVEX
echo ===================================
echo Execute este comando e responda "Y" quando perguntado:
echo.
echo npx convex deploy
echo.

echo ===================================
echo 2. CONFIGURAR VARIAVEIS NA VERCEL
echo ===================================
echo Acesse vercel.com ^> seu projeto ^> Settings ^> Environment Variables
echo.
echo Adicione/atualize estas variáveis:
echo.
echo CONVEX_DEPLOYMENT=dutiful-goshawk-839
echo NEXT_PUBLIC_CONVEX_URL=https://dutiful-goshawk-839.convex.cloud
echo NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_c2V0dGxpbmctY29icmEtMjYuY2xlcmsuYWNjb3VudHMuZGV2JA
echo CLERK_SECRET_KEY=sk_test_pYtMFEw1Hm19GwUiq5S7jKuyi4RKPwnEQjQntsV3X8
echo NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
echo NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
echo NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard/files
echo NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard/files
echo.

echo ===================================
echo 3. FORCAR REDEPLOY NA VERCEL
echo ===================================
echo Depois de configurar as variáveis, execute:
echo.
echo git add .
echo git commit -m "Configure production environment"  
echo git push origin main
echo.
echo OU vá na Vercel ^> seu projeto ^> Deployments ^> click nos 3 pontos ^> Redeploy
echo.

echo ===================================
echo 4. VERIFICAR SE FUNCIONOU
echo ===================================
echo Acesse seu app na Vercel e teste:
echo - Login/logout
echo - Upload de arquivo
echo - Tema dark/light
echo.

pause
