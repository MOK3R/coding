
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const SUPABASE_URL='https://cmqzzjrzylwoyumrtrrw.supabase.co'
const SUPABASE_TOKEN='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtcXp6anJ6eWx3b3l1bXJ0cnJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYxNTExMDAsImV4cCI6MjAzMTcyNzEwMH0.4Trp077fbHk1czYkjIqlRv4utSSszDK5yRCaB6xnNEs'
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_TOKEN)

export default {
    name: "MainMixin",
    methods: {
        $supabase() {
            return supabaseClient
        },
        async $table(name='pictures', select='*'){
            let { data, error } = await this.$supabase().from(name).select(select)
            console.log('######## DATA')
            console.log(data)
            if (error) {
                console.log(error)
            }
            return data
        },
    }
}