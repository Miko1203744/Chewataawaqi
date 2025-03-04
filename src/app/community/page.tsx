import { CommunityHero } from "@/components/community-ui/hero"
import {JoinCommunity} from "@/components/community-ui/join-community"
import {CommunityStats} from "@/components/community-ui/community-stats"
import {CommunityGallery} from "@/components/community-ui/community-gallery"

export default function Community() {
  return (
    <main className="pt-16"> 
     <CommunityHero/>
     <CommunityStats/>
     <CommunityGallery />
     <JoinCommunity/>
    </main>
  )
}