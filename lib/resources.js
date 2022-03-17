import {  getMenuWeb } from './api'

export async function initialSharedProps() {
    const navbar = (await getMenuWeb(process.env.CF_MENU_HEADER_ID)) ?? {};
    const footer = (await getMenuWeb(process.env.CF_MENU_FOOTER_ID)) ?? {};
    return [navbar, footer]
}