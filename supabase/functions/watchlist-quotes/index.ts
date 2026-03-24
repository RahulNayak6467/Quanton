// // // Follow this setup guide to integrate the Deno language server with your editor:
// // // https://deno.land/manual/getting_started/setup_your_environment
// // // This enables autocomplete, go to definition, etc.

// // // Setup type definitions for built-in Supabase Runtime APIs
// // import "@supabase/functions-js/edge-runtime.d.ts"

// // console.log("Hello from Functions!")

// // Deno.serve(async (req) => {
// //   const { name } = await req.json()
// //   const data = {
// //     message: `Hello ${name}!`,
// //   }

// //   return new Response(
// //     JSON.stringify(data),
// //     { headers: { "Content-Type": "application/json" } },
// //   )
// // })

// // /* To invoke locally:

// //   1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
// //   2. Make an HTTP request:

// //   curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/watchlist-quotes' \
// //     --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
// //     --header 'Content-Type: application/json' \
// //     --data '{"name":"Functions"}'

// // */

// // import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

// // const corsHeaders = {
// //   'Access-Control-Allow-Origin': '*',
// //   'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
// // }

// // serve(async (req) => {
// //   if (req.method === 'OPTIONS') {
// //     return new Response('ok', { headers: corsHeaders })
// //   }

// //   const { symbols } = await req.json()

// //   const response = await fetch(
// //     `https://api.tiingo.com/iex?tickers=${symbols.join(',')}`,
// //     {
// //       headers: {
// //         'Authorization': `Token ${Deno.env.get('TIINGO_TOKEN')}`,
// //         'Content-Type': 'application/json'
// //       }
// //     }
// //   )

// //   const data = await response.json()

// //   return new Response(JSON.stringify(data), {
// //     headers: { ...corsHeaders, 'Content-Type': 'application/json' }
// //   })
// // })

// import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

// const corsHeaders = {
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
// }

// serve(async (req) => {
//   if (req.method === 'OPTIONS') {
//     return new Response('ok', { headers: corsHeaders })
//   }

//   const { symbols } = await req.json()

//   const response = await fetch(
//     `https://api.tiingo.com/iex?tickers=${symbols.join(',')}`,
//     {
//       headers: {
//         'Authorization': `Token ${Deno.env.get('TIINGO_TOKEN')}`,
//         'Content-Type': 'application/json'
//       }
//     }
//   )

//   const data = await response.json()

//   return new Response(JSON.stringify(data), {
//     headers: { ...corsHeaders, 'Content-Type': 'application/json' }
//   })
// })


import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  const { symbols } = await req.json()

  const token = Deno.env.get('TIINGO_TOKEN')
  console.log("Token:", token) // check if token is being read

  const response = await fetch(
    `https://api.tiingo.com/iex?tickers=${symbols.join(',')}`,
    {
      headers: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json'
      }
    }
  )

  console.log("Tiingo status:", response.status) // check tiingo response

  const data = await response.json()
  console.log("Tiingo data:", data)

  return new Response(JSON.stringify(data), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
  })
})
