-- Jalankan sekali di Supabase → SQL Editor → New query → Run.

create table public.comments (
  id         bigint generated always as identity primary key,
  name       text not null check (char_length(name) between 1 and 40),
  text       text not null check (char_length(text) between 1 and 300),
  approved   boolean not null default true,  -- set false lewat Table Editor untuk menyembunyikan komentar
  created_at timestamptz not null default now()
);

alter table public.comments enable row level security;

-- Publik hanya boleh MEMBACA komentar yang approved, dan MENAMBAH komentar baru.
-- Tidak ada policy update/delete → pengunjung tidak bisa mengubah atau menghapus.
create policy "baca komentar approved" on public.comments
  for select to anon using (approved);

create policy "tambah komentar" on public.comments
  for insert to anon with check (approved);

-- Pengunjung hanya boleh mengisi kolom name & text.
revoke all on public.comments from anon;
grant select (id, name, text, created_at) on public.comments to anon;
grant insert (name, text) on public.comments to anon;
