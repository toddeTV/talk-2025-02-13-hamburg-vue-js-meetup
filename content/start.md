---
layout: cover
leftOrientation: center
---

<h1 class="!text-5xl">3D or Not 3D?<br>Vue and Beyond!</h1>

<div class="flex flex-col relative">
    <div>
        with <span class="color-[#26ab7a]">Thorsten Seyschab</span>
    </div>
    <ul class="absolute top-10 w-100" v-click="1">
        <li><mdi-message-bubble-outline class="baseColor mr-2" /> Computer Scientist and Web Engineer</li>
        <li><mdi-school-outline class="baseColor mr-2" /> Master of Science in Computer Science</li>
        <li><mdi-worker-outline class="baseColor mr-2"/> Fullstack developer, Self-Employed</li>
        <!-- <li>based in Germany</li> -->
    </ul>
    <div
        class="absolute -top-14 left-105 px-5 py-2 whitespace-nowrap flex flex-col gap-2"
        v-click="2"
        v-mark="{ at: 2, color: '#26ab7a', type: 'box' }"
    >
        <div class="flex">
            <mdi-web class="baseColor mt-0.5 mr-2" />
            <MyLink to="https://todde.tv/">todde.tv</MyLink>
        </div>
        <div class="flex">
            <mdi-github class="baseColor mt-0.5 mr-2" />
            <MyLink to="https://github.com/toddeTV">toddeTV</MyLink>
        </div>
        <div class="flex">
            <mdi-linkedin class="baseColor mt-0.5 mr-2" />
            <MyLink to="https://www.linkedin.com/in/toddetv/">toddeTV</MyLink>
        </div>
        <div class="flex">
            <simple-icons-x class="baseColor mt-0.5 mr-2" />
            <MyLink to="https://x.com/toddeTV">toddeTV</MyLink>
        </div>
        <div class="flex">
            <!-- TODO wrong discord URI? -->
            <mdi-discord class="baseColor mt-0.5 mr-2" />
            <MyLink to="https://discordapp.com/users/todde.tv/">todde.tv</MyLink>
        </div>
        <div class="flex">
            <simple-icons-bluesky class="baseColor mt-0.5 mr-2" />
            <MyLink to="https://bsky.app/profile/todde.tv">todde.tv</MyLink>
        </div>
        <div class="flex">
            <simple-icons-twitch class="baseColor mt-0.5 mr-2" />
            <MyLink to="https://www.twitch.tv/toddeTV">toddeTV</MyLink>
        </div>
    </div>
</div>

<!--
- You can find me online
- My website is always on the bottom left
- The slides are public - link at the end
-->
