import * as React from "react"
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem,
} from "cmdk"

/**
 * `CommandPalette` is a searchable keyboard-driven UI overlay that
 * helps users quickly find actions or navigate. Opens with ⌘K / Ctrl+K.
 * Keyboard navigation is supported with arrow keys and Enter.
 */
export function CommandPalette() {
  const [open, setOpen] = React.useState(true) // Start open by default

  // Open with Cmd+K / Ctrl+K
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
    >
      <Command className="w-full max-w-md rounded-lg border bg-white p-4 shadow-xl dark:border-zinc-700 dark:bg-zinc-900">
        <p className="mb-2 text-sm text-zinc-500 dark:text-zinc-400">
          Press <kbd className="rounded border px-1 text-xs">⌘</kbd> + <kbd className="rounded border px-1 text-xs">K</kbd> or <kbd className="rounded border px-1 text-xs">Ctrl</kbd> + <kbd className="rounded border px-1 text-xs">K</kbd> to open/close
        </p>
        <CommandInput
          placeholder="Type a command or search…"
          aria-label="Command Search"
          className="mb-4 w-full rounded border px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
        />
        <CommandList className="max-h-60 overflow-y-auto">
          <CommandGroup heading="General">
            <CommandItem
              onSelect={() => {
                alert("Searching…")
                setOpen(false)
              }}
              className="cursor-pointer rounded-md px-2 py-1 data-[cmdk-selected=true]:bg-zinc-200 data-[cmdk-selected=true]:outline data-[cmdk-selected=true]:outline-2 data-[cmdk-selected=true]:outline-blue-500 dark:data-[cmdk-selected=true]:bg-zinc-700"
            >
              🔍 Search
            </CommandItem>
            <CommandItem
              onSelect={() => {
                alert("Opening Settings…")
                setOpen(false)
              }}
              className="cursor-pointer rounded-md px-2 py-1 data-[cmdk-selected=true]:bg-zinc-200 data-[cmdk-selected=true]:outline data-[cmdk-selected=true]:outline-2 data-[cmdk-selected=true]:outline-blue-500 dark:data-[cmdk-selected=true]:bg-zinc-700"
            >
              ⚙️ Settings
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Navigation">
            <CommandItem
              onSelect={() => {
                alert("Going to Home…")
                setOpen(false)
              }}
              className="cursor-pointer rounded-md px-2 py-1 data-[cmdk-selected=true]:bg-zinc-200 data-[cmdk-selected=true]:outline data-[cmdk-selected=true]:outline-2 data-[cmdk-selected=true]:outline-blue-500 dark:data-[cmdk-selected=true]:bg-zinc-700"
            >
              🏠 Home
            </CommandItem>
            <CommandItem
              onSelect={() => {
                alert("Opening Profile…")
                setOpen(false)
              }}
              className="cursor-pointer rounded-md px-2 py-1 data-[cmdk-selected=true]:bg-zinc-200 data-[cmdk-selected=true]:outline data-[cmdk-selected=true]:outline-2 data-[cmdk-selected=true]:outline-blue-500 dark:data-[cmdk-selected=true]:bg-zinc-700"
            >
              👤 Profile
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </CommandDialog>
  )
}