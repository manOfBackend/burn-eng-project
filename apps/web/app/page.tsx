import { Shell } from '@/components/shell';
import VocaForm from '@/components/voca-form';
import { currentUser } from '@clerk/nextjs';
import { DevelopingLottie, Icons, WelcomeLottie, ZammanboLottie } from '@sayvoca/ui';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger } from '@sayvoca/ui/navigation-menu';

export default async function page() {
  const user = await currentUser()
  const userEmail = user?.emailAddresses[0].emailAddress ?? ''
  return (
    <Shell>
      <div className='flex flex-col items-center justify-center'>
        <WelcomeLottie className='max-w-sm' />
        <DevelopingLottie className='max-w-sm' />
      </div>
      <NavigationMenu>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="h-auto">
            관리자 메뉴
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    aria-label="admin-words"
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/admin/words"
                  >
                    <Icons.logo className="h-6 w-6" aria-hidden="true" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      단어장
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenu>
      <p>로그인 아이디: {userEmail}</p>
      <VocaForm name={user?.username ?? ''} />
    </Shell>
  )
}
