import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@sayvoca/ui/navigation-menu";


export default async function AdminPage() {
  return (
    <section className="mx-auto mt-20">
      <NavigationMenu className=''>
        <NavigationMenuList className='menu rounded-xl shadow-lg'>
          <NavigationMenuItem>
            <NavigationMenuLink href='/admin/sentense'>
              <p className="text-2xl font-bold">문장</p>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href='/admin/level'>
              <p className="text-2xl font-bold">난이도</p>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </section>
  )
}
