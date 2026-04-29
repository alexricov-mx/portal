import { test, expect } from '@playwright/test'

test('carga la página principal', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveURL('/')
})
